import { TrendingUp, TrendingDown, Wallet } from "lucide-react";
import { Card, CardContent } from "@/app/_components/ui/card";
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
      iconBg: "bg-primary/10",
      iconColor: "text-primary",
      valueColor: "text-primary",
    },
    {
      title: "Despesas no Período",
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
            </CardContent>
          </Card>
        )
      )}
    </div>
  );
};

export default ReportSummary;
