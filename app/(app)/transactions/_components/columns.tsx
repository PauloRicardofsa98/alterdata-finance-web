"use client";

import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, Pencil, Trash2 } from "lucide-react";
import { Button } from "@/app/_components/ui/button";
import { Badge } from "@/app/_components/ui/badge";
import { Transaction, TransactionType } from "@/app/_models/transaction";
import { formatCurrency, formatDate, formatDateTime } from "@/app/_lib/formatters";

interface ColumnCallbacks {
  onEdit: (transaction: Transaction) => void;
  onDelete: (transaction: Transaction) => void;
}

export const createColumns = ({
  onEdit,
  onDelete,
}: ColumnCallbacks): ColumnDef<Transaction>[] => [
  {
    accessorKey: "description",
    header: ({ column }) => (
      <Button
        variant="ghost"
        size="sm"
        className="-ml-3 text-xs font-medium uppercase tracking-wide"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Descrição
        <ArrowUpDown className="ml-1 size-3.5" />
      </Button>
    ),
    cell: ({ row }) => (
      <span className="font-medium text-slate-900">
        {row.getValue("description")}
      </span>
    ),
  },
  {
    accessorKey: "amount",
    header: ({ column }) => (
      <Button
        variant="ghost"
        size="sm"
        className="-ml-3 text-xs font-medium uppercase tracking-wide"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Valor
        <ArrowUpDown className="ml-1 size-3.5" />
      </Button>
    ),
    cell: ({ row }) => {
      const type = row.original.type;
      const amount = row.getValue<number>("amount");
      return (
        <span
          className={
            type === TransactionType.Revenue
              ? "font-medium text-primary"
              : "font-medium text-slate-900"
          }
        >
          {type === TransactionType.Revenue ? "+" : "-"}
          {formatCurrency(amount)}
        </span>
      );
    },
  },
  {
    accessorKey: "date",
    header: ({ column }) => (
      <Button
        variant="ghost"
        size="sm"
        className="-ml-3 text-xs font-medium uppercase tracking-wide"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Data
        <ArrowUpDown className="ml-1 size-3.5" />
      </Button>
    ),
    cell: ({ row }) => (
      <span className="text-slate-600">
        {formatDate(row.getValue("date"))}
      </span>
    ),
  },
  {
    accessorKey: "category",
    header: "Categoria",
    cell: ({ row }) => (
      <span className="text-slate-600">
        {row.getValue("category") ?? "—"}
      </span>
    ),
  },
  {
    accessorKey: "type",
    header: ({ column }) => (
      <Button
        variant="ghost"
        size="sm"
        className="-ml-3 text-xs font-medium uppercase tracking-wide"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Tipo
        <ArrowUpDown className="ml-1 size-3.5" />
      </Button>
    ),
    cell: ({ row }) => {
      const type = row.getValue<TransactionType>("type");
      return (
        <Badge
          className={
            type === TransactionType.Revenue
              ? "bg-primary/10 text-primary hover:bg-primary/10"
              : "bg-slate-100 text-slate-600 hover:bg-slate-100"
          }
        >
          {type === TransactionType.Revenue ? "Receita" : "Despesa"}
        </Badge>
      );
    },
  },
  {
    id: "updatedAt",
    accessorFn: (row) => row.updatedAt ?? row.createdAt,
    header: ({ column }) => (
      <Button
        variant="ghost"
        size="sm"
        className="-ml-3 text-xs font-medium uppercase tracking-wide"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Última Modificação
        <ArrowUpDown className="ml-1 size-3.5" />
      </Button>
    ),
    cell: ({ getValue }) => (
      <span className="text-slate-600">
        {formatDateTime(getValue<string>())}
      </span>
    ),
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => (
      <div className="flex gap-1">
        <Button
          variant="ghost"
          size="icon-xs"
          onClick={() => onEdit(row.original)}
          className="text-slate-500 hover:text-slate-900"
        >
          <Pencil className="size-3.5" />
        </Button>
        <Button
          variant="ghost"
          size="icon-xs"
          onClick={() => onDelete(row.original)}
          className="text-slate-500 hover:text-destructive"
        >
          <Trash2 className="size-3.5" />
        </Button>
      </div>
    ),
  },
];
