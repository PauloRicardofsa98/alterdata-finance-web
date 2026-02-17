import { z } from "zod/v4";
import { TransactionType } from "@/app/_models/transaction";

export const transactionSchema = z.object({
  description: z
    .string()
    .min(1, "Descrição é obrigatória")
    .max(200, "Descrição deve ter no máximo 200 caracteres"),
  amount: z.number().positive("Valor deve ser maior que zero"),
  date: z.string().min(1, "Data é obrigatória"),
  category: z
    .string()
    .max(100, "Categoria deve ter no máximo 100 caracteres")
    .optional(),
  type: z.nativeEnum(TransactionType, { error: "Tipo é obrigatório" }),
});

export type TransactionFormData = z.infer<typeof transactionSchema>;
