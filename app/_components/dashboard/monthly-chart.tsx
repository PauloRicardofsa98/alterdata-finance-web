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
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/app/_components/ui/card";
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
      <CardHeader className="pb-2">
        <CardTitle className="text-base font-semibold">
          Receitas vs Despesas
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="#E2E8F0"
                vertical={false}
              />
              <XAxis
                dataKey="name"
                tick={{ fill: "#64748B", fontSize: 12 }}
                tickLine={false}
                axisLine={{ stroke: "#E2E8F0" }}
              />
              <YAxis
                tick={{ fill: "#64748B", fontSize: 12 }}
                tickLine={false}
                axisLine={{ stroke: "#E2E8F0" }}
                tickFormatter={(v) => formatCurrency(v)}
              />
              <Tooltip
                formatter={(value) => formatCurrency(Number(value))}
                contentStyle={{
                  backgroundColor: "#FFFFFF",
                  border: "1px solid #E2E8F0",
                  borderRadius: "8px",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                }}
              />
              <Legend
                verticalAlign="bottom"
                height={36}
                iconType="circle"
              />
              <Bar
                dataKey="Receitas"
                fill="#10B981"
                radius={[4, 4, 0, 0]}
              />
              <Bar
                dataKey="Despesas"
                fill="#EF4444"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default MonthlyChart;
