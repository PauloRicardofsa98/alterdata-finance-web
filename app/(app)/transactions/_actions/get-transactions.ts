"use server";

import { transactionService } from "@/app/_services/transaction";
import { Transaction } from "@/app/_models/transaction";

export const getTransactions = async (): Promise<Transaction[]> =>
  transactionService.getAll();
