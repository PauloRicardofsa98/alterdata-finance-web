import { api } from "@/app/_lib/api";
import {
  Transaction,
  CreateTransactionRequest,
  UpdateTransactionRequest,
} from "@/app/_models/transaction";

const BASE_PATH = "/transactions";

export const transactionService = {
  async getAll(): Promise<Transaction[]> {
    const { data } = await api.get<Transaction[]>(BASE_PATH);
    return data;
  },

  async getById(id: string): Promise<Transaction> {
    const { data } = await api.get<Transaction>(`${BASE_PATH}/${id}`);
    return data;
  },

  async create(request: CreateTransactionRequest): Promise<Transaction> {
    const { data } = await api.post<Transaction>(BASE_PATH, request);
    return data;
  },

  async update(
    id: string,
    request: UpdateTransactionRequest,
  ): Promise<Transaction> {
    const { data } = await api.put<Transaction>(`${BASE_PATH}/${id}`, request);
    return data;
  },

  async delete(id: string): Promise<void> {
    await api.delete(`${BASE_PATH}/${id}`);
  },
};
