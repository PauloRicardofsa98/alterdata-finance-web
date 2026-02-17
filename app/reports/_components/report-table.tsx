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
  <div className="overflow-x-auto rounded-md border">
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Descrição</TableHead>
          <TableHead>Valor</TableHead>
          <TableHead>Data</TableHead>
          <TableHead>Categoria</TableHead>
          <TableHead>Tipo</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {transactions.length === 0 ? (
          <TableRow>
            <TableCell colSpan={5} className="h-24 text-center">
              Nenhuma transação encontrada no período.
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
            </TableRow>
          ))
        )}
      </TableBody>
    </Table>
  </div>
);

export default ReportTable;
