import { api } from "@/app/_lib/api";
import { DashboardResponse } from "@/app/_models/dashboard";

export const dashboardService = {
  async getSummary(year?: number): Promise<DashboardResponse> {
    const params = year ? { year } : {};
    const { data } = await api.get<DashboardResponse>("/dashboard/summary", {
      params,
    });
    return data;
  },
};
