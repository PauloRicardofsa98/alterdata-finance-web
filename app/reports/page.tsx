import ReportsClient from "./_components/reports-client";

const ReportsPage = () => (
  <>
    <div>
      <h1 className="text-xl font-bold text-slate-900 sm:text-2xl">
        Relatórios
      </h1>
      <p className="mt-1 text-sm text-slate-500">
        Gere relatórios financeiros por período
      </p>
    </div>

    <ReportsClient />
  </>
);

export default ReportsPage;
