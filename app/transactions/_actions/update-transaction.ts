"use server";

import { revalidatePath } from "next/cache";
import { transactionService } from "@/app/_services/transaction";
import { transactionSchema, TransactionFormData } from "@/app/_lib/validators";

export const updateTransaction = async (
  id: string,
  data: TransactionFormData
) => {
  const parsed = transactionSchema.safeParse(data);

  if (!parsed.success) {
    return {
      success: false as const,
      errors: parsed.error.issues.map((i) => i.message),
    };
  }

  try {
    await transactionService.update(id, parsed.data);
    revalidatePath("/transactions");
    revalidatePath("/");
    revalidatePath("/reports");
    return { success: true as const };
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Erro ao atualizar transação.";
    return { success: false as const, errors: [message] };
  }
};
