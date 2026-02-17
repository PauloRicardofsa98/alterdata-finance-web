import { Transaction, TransactionType } from "./transaction";

export interface ReportResponse {
  transactions: Transaction[];
  totalExpenses: number;
  totalRevenues: number;
  balance: number;
  startDate: string;
  endDate: string;
}

export interface ReportFilters {
  startDate: string;
  endDate: string;
  type?: TransactionType;
}
