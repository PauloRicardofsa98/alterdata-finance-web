import { TrendingUp, TrendingDown, Wallet } from "lucide-react";
import { Card, CardContent } from "@/app/_components/ui/card";
import { formatCurrency } from "@/app/_lib/formatters";
import { MonthlyDataItem } from "@/app/_models/dashboard";

interface SummaryCardsProps {
  items: MonthlyDataItem[];
}

const SummaryCards = ({ items }: SummaryCardsProps) => {
  const totalRevenues = items.reduce((sum, i) => sum + i.totalRevenues, 0);
  const totalExpenses = items.reduce((sum, i) => sum + i.totalExpenses, 0);
  const balance = totalRevenues - totalExpenses;
  const expenseRatio =
    totalRevenues > 0 ? Math.min((totalExpenses / totalRevenues) * 100, 100) : 0;

  const cards = [
    {
      title: "Total Receitas",
      value: formatCurrency(totalRevenues),
      icon: TrendingUp,
      iconBg: "bg-primary/10",
      iconColor: "text-primary",
      valueColor: "text-primary",
    },
    {
      title: "Total Despesas",
      value: formatCurrency(totalExpenses),
      icon: TrendingDown,
      iconBg: "bg-destructive/10",
      iconColor: "text-destructive",
      valueColor: "text-slate-900",
    },
    {
      title: "Balanço",
      value: formatCurrency(balance),
      icon: Wallet,
      iconBg: balance >= 0 ? "bg-primary/10" : "bg-destructive/10",
      iconColor: balance >= 0 ? "text-primary" : "text-destructive",
      valueColor: balance >= 0 ? "text-primary" : "text-destructive",
    },
  ];

  return (
    <div className="grid gap-4 sm:grid-cols-3 lg:gap-6">
      {cards.map(
        ({ title, value, icon: Icon, iconBg, iconColor, valueColor }) => (
          <Card key={title}>
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <p className="text-sm font-medium text-slate-500">{title}</p>
                  <p className={`text-2xl sm:text-3xl font-bold ${valueColor}`}>
                    {value}
                  </p>
                </div>
                <div
                  className={`flex size-10 items-center justify-center rounded-lg ${iconBg}`}
                >
                  <Icon className={`size-5 ${iconColor}`} />
                </div>
              </div>

              {title === "Total Despesas" && totalRevenues > 0 && (
                <div className="mt-4 space-y-1">
                  <div className="flex justify-between text-xs text-slate-500">
                    <span>Uso da receita</span>
                    <span>{expenseRatio.toFixed(0)}%</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                    <div
                      className={`h-full rounded-full transition-all ${
                        expenseRatio > 80
                          ? "bg-destructive"
                          : expenseRatio > 60
                            ? "bg-amber-500"
                            : "bg-primary"
                      }`}
                      style={{ width: `${expenseRatio}%` }}
                    />
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        )
      )}
    </div>
  );
};

export default SummaryCards;
