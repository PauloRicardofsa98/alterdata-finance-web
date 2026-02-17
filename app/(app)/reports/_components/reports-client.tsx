"use client";

import { useState } from "react";
import { toast } from "sonner";
import { TransactionType } from "@/app/_models/transaction";
import { ReportResponse } from "@/app/_models/report";
import { getReport } from "@/app/(app)/reports/_actions/get-report";
import { formatDateISO } from "@/app/_lib/formatters";
import ReportFilters from "./report-filters";
import ReportSummary from "./report-summary";
import ReportTable from "./report-table";

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

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      const filterType =
        type === "all" ? undefined : (type as TransactionType);
      const data = await getReport(startDate, endDate, filterType);
      setReport(data);
    } catch {
      toast.error("Erro ao gerar relatório. Tente novamente.");
    } finally {
      setIsLoading(false);
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
