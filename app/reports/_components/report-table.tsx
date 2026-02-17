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

interface ReportTableProps {
  transactions: Transaction[];
}

const ReportTable = ({ transactions }: ReportTableProps) => (
  <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white">
    <Table>
      <TableHeader>
        <TableRow className="hover:bg-transparent">
          <TableHead className="text-xs font-medium uppercase tracking-wide text-slate-500">
            Descrição
          </TableHead>
          <TableHead className="text-xs font-medium uppercase tracking-wide text-slate-500">
            Valor
          </TableHead>
          <TableHead className="text-xs font-medium uppercase tracking-wide text-slate-500">
            Data
          </TableHead>
          <TableHead className="text-xs font-medium uppercase tracking-wide text-slate-500">
            Categoria
          </TableHead>
          <TableHead className="text-xs font-medium uppercase tracking-wide text-slate-500">
            Tipo
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {transactions.length === 0 ? (
          <TableRow>
            <TableCell colSpan={5} className="h-24 text-center">
              <div className="flex flex-col items-center justify-center py-8">
                <p className="text-sm text-slate-500">
                  Nenhuma transação encontrada no período.
                </p>
              </div>
            </TableCell>
          </TableRow>
        ) : (
          transactions.map((transaction) => (
            <TableRow
              key={transaction.id}
              className="hover:bg-slate-50 transition-colors"
            >
              <TableCell className="font-medium text-slate-900">
                {transaction.description}
              </TableCell>
              <TableCell
                className={
                  transaction.type === TransactionType.Revenue
                    ? "font-medium text-primary"
                    : "font-medium text-slate-900"
                }
              >
                {transaction.type === TransactionType.Revenue ? "+" : "-"}
                {formatCurrency(transaction.amount)}
              </TableCell>
              <TableCell className="text-slate-600">
                {formatDate(transaction.date)}
              </TableCell>
              <TableCell className="text-slate-600">
                {transaction.category ?? "—"}
              </TableCell>
              <TableCell>
                <Badge
                  className={
                    transaction.type === TransactionType.Revenue
                      ? "bg-primary/10 text-primary hover:bg-primary/10"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-100"
                  }
                >
                  {transaction.type === TransactionType.Revenue
                    ? "Receita"
                    : "Despesa"}
                </Badge>
              </TableCell>
            </TableRow>
          ))
        )}
      </TableBody>
    </Table>
  </div>
);

export default ReportTable;
