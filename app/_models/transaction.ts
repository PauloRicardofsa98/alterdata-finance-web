export enum TransactionType {
  Expense = "Expense",
  Revenue = "Revenue",
}

export interface Transaction {
  id: string;
  description: string;
  amount: number;
  date: string;
  category?: string;
  type: TransactionType;
  typeName: string;
  createdAt: string;
  updatedAt?: string;
}

export interface CreateTransactionRequest {
  description: string;
  amount: number;
  date: string;
  category?: string;
  type: TransactionType;
}

export interface UpdateTransactionRequest {
  description: string;
  amount: number;
  date: string;
  category?: string;
  type: TransactionType;
}
