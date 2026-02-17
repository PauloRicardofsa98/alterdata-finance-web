import { dashboardService } from "@/app/_services/dashboard";
import SummaryCards from "@/app/_components/dashboard/summary-cards";
import MonthlyChart from "@/app/_components/dashboard/monthly-chart";
import BalanceChart from "@/app/_components/dashboard/balance-chart";
import YearSelector from "@/app/_components/dashboard/year-selector";

export const dynamic = "force-dynamic";

interface DashboardPageProps {
  searchParams: Promise<{ year?: string }>;
}

const DashboardPage = async ({ searchParams }: DashboardPageProps) => {
  const { year: yearParam } = await searchParams;
  const year = yearParam ? Number(yearParam) : new Date().getFullYear();

  let dashboard = null;
  let error: string | null = null;

  try {
    dashboard = await dashboardService.getSummary(year);
  } catch {
    error =
      "Não foi possível carregar o dashboard. Verifique se a API está rodando.";
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Dashboard</h1>
          <p className="text-muted-foreground">
            Visão geral das suas finanças.
          </p>
        </div>
        <YearSelector year={year} />
      </div>

      {error ? (
        <div className="rounded-md border border-destructive/50 bg-destructive/10 p-4 text-sm text-destructive">
          {error}
        </div>
      ) : dashboard ? (
        <>
          <SummaryCards items={dashboard.monthlyData} />
          <div className="grid gap-6 lg:grid-cols-2">
            <MonthlyChart items={dashboard.monthlyData} />
            <BalanceChart items={dashboard.monthlyData} />
          </div>
        </>
      ) : null}
    </div>
  );
};

export default DashboardPage;
