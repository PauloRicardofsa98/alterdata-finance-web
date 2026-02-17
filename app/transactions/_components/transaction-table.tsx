"use client";

import { Pencil, Trash2 } from "lucide-react";
import { Button } from "@/app/_components/ui/button";
import { Badge } from "@/app/_components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/app/_components/ui/table";
import { Transaction, TransactionType } from "@/app/_models/transaction";
import { formatCurrency, formatDate } from "@/app/_lib/formatters";

interface TransactionTableProps {
  transactions: Transaction[];
  onEdit: (transaction: Transaction) => void;
  onDelete: (transaction: Transaction) => void;
}

const TransactionTable = ({
  transactions,
  onEdit,
  onDelete,
}: TransactionTableProps) => (
  <div className="rounded-md border">
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Descrição</TableHead>
          <TableHead>Valor</TableHead>
          <TableHead>Data</TableHead>
          <TableHead>Categoria</TableHead>
          <TableHead>Tipo</TableHead>
          <TableHead className="w-[100px]">Ações</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {transactions.length === 0 ? (
          <TableRow>
            <TableCell colSpan={6} className="h-24 text-center">
              Nenhuma transação encontrada.
            </TableCell>
          </TableRow>
        ) : (
          transactions.map((transaction) => (
            <TableRow key={transaction.id}>
              <TableCell className="font-medium">
                {transaction.description}
              </TableCell>
              <TableCell
                className={
                  transaction.type === TransactionType.Revenue
                    ? "text-emerald-600"
                    : "text-red-600"
                }
              >
                {transaction.type === TransactionType.Revenue ? "+" : "-"}
                {formatCurrency(transaction.amount)}
              </TableCell>
              <TableCell>{formatDate(transaction.date)}</TableCell>
              <TableCell>{transaction.category ?? "—"}</TableCell>
              <TableCell>
                <Badge
                  variant={
                    transaction.type === TransactionType.Revenue
                      ? "default"
                      : "destructive"
                  }
                >
                  {transaction.type === TransactionType.Revenue
                    ? "Receita"
                    : "Despesa"}
                </Badge>
              </TableCell>
              <TableCell>
                <div className="flex gap-1">
                  <Button
                    variant="ghost"
                    size="icon-xs"
                    onClick={() => onEdit(transaction)}
                  >
                    <Pencil className="size-3.5" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon-xs"
                    onClick={() => onDelete(transaction)}
                  >
                    <Trash2 className="size-3.5 text-destructive" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))
        )}
      </TableBody>
    </Table>
  </div>
);

export default TransactionTable;
