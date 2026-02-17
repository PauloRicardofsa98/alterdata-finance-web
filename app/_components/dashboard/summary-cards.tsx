import { TrendingUp, TrendingDown, Wallet } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/app/_components/ui/card";
import { formatCurrency } from "@/app/_lib/formatters";
import { MonthlyDataItem } from "@/app/_models/dashboard";

interface SummaryCardsProps {
  items: MonthlyDataItem[];
}

const SummaryCards = ({ items }: SummaryCardsProps) => {
  const totalRevenues = items.reduce((sum, i) => sum + i.totalRevenues, 0);
  const totalExpenses = items.reduce((sum, i) => sum + i.totalExpenses, 0);
  const balance = totalRevenues - totalExpenses;

  const cards = [
    {
      title: "Total Receitas",
      value: formatCurrency(totalRevenues),
      icon: TrendingUp,
      className: "text-emerald-600",
    },
    {
      title: "Total Despesas",
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

export default SummaryCards;
