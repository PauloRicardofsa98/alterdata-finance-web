"use server";

import { revalidatePath } from "next/cache";
import { transactionService } from "@/app/_services/transaction";
import { transactionSchema } from "@/app/_lib/validators";

export const createTransaction = async (formData: FormData) => {
  const raw = {
    description: formData.get("description"),
    amount: formData.get("amount"),
    date: formData.get("date"),
    category: formData.get("category") || undefined,
    type: formData.get("type"),
  };

  const parsed = transactionSchema.safeParse(raw);

  if (!parsed.success) {
    return { success: false as const, errors: parsed.error.issues.map((i) => i.message) };
  }

  try {
    await transactionService.create(parsed.data);
    revalidatePath("/transactions");
    revalidatePath("/");
    revalidatePath("/reports");
    return { success: true as const };
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Erro ao criar transação.";
    return { success: false as const, errors: [message] };
  }
};
