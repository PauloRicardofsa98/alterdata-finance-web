"use client";

import { useState } from "react";
import { FileDown, FileText } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/app/_components/ui/button";
import { TransactionType } from "@/app/_models/transaction";
import { ReportResponse } from "@/app/_models/report";
import {
  getReport,
  exportCsv,
  exportPdf,
} from "@/app/(app)/reports/_actions/get-report";
import { formatDateISO } from "@/app/_lib/formatters";
import ReportFilters from "./report-filters";
import ReportSummary from "./report-summary";
import ReportTable from "./report-table";

function downloadFile(bytes: number[], filename: string, mime: string) {
  const blob = new Blob([new Uint8Array(bytes)], { type: mime });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

const ReportsClient = () => {
  const now = new Date();
  const firstDay = formatDateISO(new Date(now.getFullYear(), now.getMonth(), 1));
  const lastDay = formatDateISO(
    new Date(now.getFullYear(), now.getMonth() + 1, 0)
  );

  const [startDate, setStartDate] = useState(firstDay);
  const [endDate, setEndDate] = useState(lastDay);
  const [type, setType] = useState("all");
  const [report, setReport] = useState<ReportResponse | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [exportingCsv, setExportingCsv] = useState(false);
  const [exportingPdf, setExportingPdf] = useState(false);

  const filterType =
    type === "all" ? undefined : (type as TransactionType);

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      const data = await getReport(startDate, endDate, filterType);
      setReport(data);
    } catch {
      toast.error("Erro ao gerar relatório. Tente novamente.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleExportCsv = async () => {
    setExportingCsv(true);
    try {
      const bytes = await exportCsv(startDate, endDate, filterType);
      downloadFile(bytes, "relatorio.csv", "text/csv;charset=utf-8");
    } catch {
      toast.error("Erro ao exportar CSV.");
    } finally {
      setExportingCsv(false);
    }
  };

  const handleExportPdf = async () => {
    setExportingPdf(true);
    try {
      const bytes = await exportPdf(startDate, endDate, filterType);
      downloadFile(bytes, "relatorio.pdf", "application/pdf");
    } catch {
      toast.error("Erro ao exportar PDF.");
    } finally {
      setExportingPdf(false);
    }
  };

  return (
    <div className="space-y-6">
      <ReportFilters
        startDate={startDate}
        endDate={endDate}
        type={type}
        onStartDateChange={setStartDate}
        onEndDateChange={setEndDate}
        onTypeChange={setType}
        onSubmit={handleSubmit}
        isLoading={isLoading}
      />

      {report && (
        <>
          <div className="flex items-center justify-between">
            <p className="text-sm text-slate-500">
              {report.transactions.length} transação(ões) encontrada(s)
            </p>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={handleExportCsv}
                disabled={exportingCsv}
              >
                <FileDown className="size-4" />
                {exportingCsv ? "Exportando..." : "CSV"}
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={handleExportPdf}
                disabled={exportingPdf}
              >
                <FileText className="size-4" />
                {exportingPdf ? "Exportando..." : "PDF"}
              </Button>
            </div>
          </div>

          <ReportSummary
            totalRevenues={report.totalRevenues}
            totalExpenses={report.totalExpenses}
            balance={report.balance}
          />
          <ReportTable transactions={report.transactions} />
        </>
      )}
    </div>
  );
};

export default ReportsClient;
