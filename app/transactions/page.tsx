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
    error = "Não foi possível carregar as transações. Verifique se a API está rodando.";
  }

  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-2xl font-semibold">Transações</h1>
        <p className="text-muted-foreground">
          Gerencie suas despesas e receitas.
        </p>
      </div>

      {error ? (
        <div className="rounded-md border border-destructive/50 bg-destructive/10 p-4 text-sm text-destructive">
          {error}
        </div>
      ) : (
        <TransactionsClient transactions={transactions} />
      )}
    </div>
  );
};

export default TransactionsPage;
