"use client";

import { useState, useMemo } from "react";
import { Plus } from "lucide-react";
import { Button } from "@/app/_components/ui/button";
import { DataTable } from "@/app/_components/ui/data-table";
import { cn } from "@/app/_lib/utils";
import { Transaction, TransactionType } from "@/app/_models/transaction";
import { createColumns } from "./columns";
import TransactionFormDialog from "./transaction-form-dialog";
import DeleteConfirmDialog from "./delete-confirm-dialog";

type FilterType = "all" | TransactionType;

const FILTERS: { value: FilterType; label: string }[] = [
  { value: "all", label: "Todos" },
  { value: TransactionType.Expense, label: "Despesas" },
  { value: TransactionType.Revenue, label: "Receitas" },
];

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

  const columns = useMemo(
    () => createColumns({ onEdit: handleEdit, onDelete: setDeletingTransaction }),
    []
  );

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-1 rounded-lg bg-slate-100 p-1">
          {FILTERS.map(({ value, label }) => (
            <button
              key={value}
              onClick={() => setFilter(value)}
              className={cn(
                "rounded-md px-3 py-1.5 text-sm font-medium transition-all",
                filter === value
                  ? "bg-white text-slate-900 shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              )}
            >
              {label}
            </button>
          ))}
        </div>

        <Button onClick={() => setFormOpen(true)} className="w-full sm:w-auto">
          <Plus className="size-4" />
          Nova Transação
        </Button>
      </div>

      <DataTable
        columns={columns}
        data={filtered}
        searchKey="description"
        searchPlaceholder="Buscar por descrição..."
        initialSorting={[{ id: "updatedAt", desc: true }]}
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
