"use server";

import { dashboardService } from "@/app/_services/dashboard";
import { DashboardResponse } from "@/app/_models/dashboard";

export const getDashboard = async (
  year?: number
): Promise<DashboardResponse> => dashboardService.getSummary(year);
