"use server";

import { revalidatePath } from "next/cache";
import { transactionService } from "@/app/_services/transaction";

export const deleteTransaction = async (id: string) => {
  try {
    await transactionService.delete(id);
    revalidatePath("/transactions");
    revalidatePath("/");
    revalidatePath("/reports");
    return { success: true as const };
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Erro ao excluir transação.";
    return { success: false as const, errors: [message] };
  }
};
