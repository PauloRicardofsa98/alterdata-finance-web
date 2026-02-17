import { getApi } from "@/app/_lib/api";
import { ReportResponse, ReportFilters } from "@/app/_models/report";

export const reportService = {
  async getReport(filters: ReportFilters): Promise<ReportResponse> {
    const api = await getApi();
    const { data } = await api.get<ReportResponse>("/reports", {
      params: {
        startDate: filters.startDate,
        endDate: filters.endDate,
        type: filters.type,
      },
    });
    return data;
  },

  async exportCsv(filters: ReportFilters): Promise<Buffer> {
    const api = await getApi();
    const { data } = await api.get("/reports/export/csv", {
      params: {
        startDate: filters.startDate,
        endDate: filters.endDate,
        type: filters.type,
      },
      responseType: "arraybuffer",
    });
    return Buffer.from(data);
  },

  async exportPdf(filters: ReportFilters): Promise<Buffer> {
    const api = await getApi();
    const { data } = await api.get("/reports/export/pdf", {
      params: {
        startDate: filters.startDate,
        endDate: filters.endDate,
        type: filters.type,
      },
      responseType: "arraybuffer",
    });
    return Buffer.from(data);
  },
};
