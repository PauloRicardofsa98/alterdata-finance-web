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
    <>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-slate-900 sm:text-2xl">
            Dashboard
          </h1>
          <p className="mt-1 text-sm text-slate-500">
            Visão geral das suas finanças
          </p>
        </div>
        <YearSelector year={year} />
      </div>

      {error ? (
        <div className="flex items-start gap-2 rounded-lg border border-destructive/20 bg-destructive/5 p-4 text-sm text-destructive">
          {error}
        </div>
      ) : dashboard ? (
        <>
          <SummaryCards items={dashboard.monthlyData} />
          <div className="grid gap-4 lg:grid-cols-2 lg:gap-6">
            <MonthlyChart items={dashboard.monthlyData} />
            <BalanceChart items={dashboard.monthlyData} />
          </div>
        </>
      ) : null}
    </>
  );
};

export default DashboardPage;
