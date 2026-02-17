"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/app/_components/ui/card";
import { formatCurrency } from "@/app/_lib/formatters";
import { MonthlyDataItem } from "@/app/_models/dashboard";

interface MonthlyChartProps {
  items: MonthlyDataItem[];
}

const MonthlyChart = ({ items }: MonthlyChartProps) => {
  const data = items.map((item) => ({
    name: item.monthName,
    Receitas: item.totalRevenues,
    Despesas: item.totalExpenses,
  }));

  return (
    <Card>
      <CardHeader>
        <CardTitle>Receitas vs Despesas por Mês</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[350px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
              <XAxis dataKey="name" className="text-xs" />
              <YAxis
                className="text-xs"
                tickFormatter={(v) => formatCurrency(v)}
              />
              <Tooltip
                formatter={(value) => formatCurrency(Number(value))}
                contentStyle={{
                  borderRadius: "var(--radius)",
                  border: "1px solid var(--border)",
                }}
              />
              <Legend />
              <Bar dataKey="Receitas" fill="#10b981" radius={[4, 4, 0, 0]} />
              <Bar dataKey="Despesas" fill="#ef4444" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default MonthlyChart;
