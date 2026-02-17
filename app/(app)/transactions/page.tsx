import { Transaction } from "@/app/_models/transaction";
import { transactionService } from "@/app/_services/transaction";
import TransactionsClient from "./_components/transactions-client";

export const dynamic = "force-dynamic";

const TransactionsPage = async () => {
  let transactions: Transaction[] = [];
  let error: string | null = null;

  try {
    transactions = await transactionService.getAll();
  } catch {
    error =
      "Não foi possível carregar as transações. Verifique se a API está rodando.";
  }

  return (
    <>
      <div>
        <h1 className="text-xl font-bold text-slate-900 sm:text-2xl">
          Transações
        </h1>
        <p className="mt-1 text-sm text-slate-500">
          Gerencie suas despesas e receitas
        </p>
      </div>

      {error ? (
        <div className="flex items-start gap-2 rounded-lg border border-destructive/20 bg-destructive/5 p-4 text-sm text-destructive">
          {error}
        </div>
      ) : (
        <TransactionsClient transactions={transactions} />
      )}
    </>
  );
};

export default TransactionsPage;
