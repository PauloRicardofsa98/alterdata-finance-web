"use client";

import { useState, useMemo } from "react";
import { Plus } from "lucide-react";
import { Button } from "@/app/_components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/app/_components/ui/tabs";
import { Transaction, TransactionType } from "@/app/_models/transaction";
import TransactionTable from "./transaction-table";
import TransactionFormDialog from "./transaction-form-dialog";
import DeleteConfirmDialog from "./delete-confirm-dialog";

type FilterType = "all" | TransactionType;

interface TransactionsClientProps {
  transactions: Transaction[];
}

const TransactionsClient = ({ transactions }: TransactionsClientProps) => {
  const [filter, setFilter] = useState<FilterType>("all");
  const [formOpen, setFormOpen] = useState(false);
  const [editingTransaction, setEditingTransaction] =
    useState<Transaction | null>(null);
  const [deletingTransaction, setDeletingTransaction] =
    useState<Transaction | null>(null);

  const filtered = useMemo(
    () =>
      filter === "all"
        ? transactions
        : transactions.filter((t) => t.type === filter),
    [transactions, filter]
  );

  const handleEdit = (transaction: Transaction) => {
    setEditingTransaction(transaction);
    setFormOpen(true);
  };

  const handleCloseForm = (open: boolean) => {
    setFormOpen(open);
    if (!open) setEditingTransaction(null);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <Tabs
          value={filter}
          onValueChange={(v) => setFilter(v as FilterType)}
        >
          <TabsList>
            <TabsTrigger value="all">Todos</TabsTrigger>
            <TabsTrigger value={TransactionType.Expense}>Despesas</TabsTrigger>
            <TabsTrigger value={TransactionType.Revenue}>Receitas</TabsTrigger>
          </TabsList>
        </Tabs>

        <Button onClick={() => setFormOpen(true)}>
          <Plus className="size-4" />
          Nova Transação
        </Button>
      </div>

      <TransactionTable
        transactions={filtered}
        onEdit={handleEdit}
        onDelete={setDeletingTransaction}
      />

      <TransactionFormDialog
        open={formOpen}
        onOpenChange={handleCloseForm}
        transaction={editingTransaction}
      />

      {deletingTransaction && (
        <DeleteConfirmDialog
          open={!!deletingTransaction}
          onOpenChange={(open) => {
            if (!open) setDeletingTransaction(null);
          }}
          transactionId={deletingTransaction.id}
          transactionDescription={deletingTransaction.description}
        />
      )}
    </div>
  );
};

export default TransactionsClient;
