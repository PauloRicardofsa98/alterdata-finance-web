"use server";

import { reportService } from "@/app/_services/report";
import { ReportResponse } from "@/app/_models/report";
import { TransactionType } from "@/app/_models/transaction";

export const getReport = async (
  startDate: string,
  endDate: string,
  type?: TransactionType
): Promise<ReportResponse> =>
  reportService.getReport({ startDate, endDate, type });
