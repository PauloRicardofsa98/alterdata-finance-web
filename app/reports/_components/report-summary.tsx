import { TrendingUp, TrendingDown, Wallet } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/app/_components/ui/card";
import { formatCurrency } from "@/app/_lib/formatters";

interface ReportSummaryProps {
  totalRevenues: number;
  totalExpenses: number;
  balance: number;
}

const ReportSummary = ({
  totalRevenues,
  totalExpenses,
  balance,
}: ReportSummaryProps) => {
  const cards = [
    {
      title: "Receitas no Período",
      value: formatCurrency(totalRevenues),
      icon: TrendingUp,
      className: "text-emerald-600",
    },
    {
      title: "Despesas no Período",
      value: formatCurrency(totalExpenses),
      icon: TrendingDown,
      className: "text-red-600",
    },
    {
      title: "Balanço",
      value: formatCurrency(balance),
      icon: Wallet,
      className: balance >= 0 ? "text-emerald-600" : "text-red-600",
    },
  ];

  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {cards.map(({ title, value, icon: Icon, className }) => (
        <Card key={title}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{title}</CardTitle>
            <Icon className={`size-4 ${className}`} />
          </CardHeader>
          <CardContent>
            <p className={`text-2xl font-bold ${className}`}>{value}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ReportSummary;
