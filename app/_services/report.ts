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
};
