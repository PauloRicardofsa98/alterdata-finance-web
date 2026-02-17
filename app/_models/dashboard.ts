export interface MonthlyDataItem {
  month: number;
  monthName: string;
  totalExpenses: number;
  totalRevenues: number;
  balance: number;
}

export interface DashboardResponse {
  year: number;
  items: MonthlyDataItem[];
}
