import ReportsClient from "./_components/reports-client";

const ReportsPage = () => (
  <div className="space-y-4">
    <div>
      <h1 className="text-2xl font-semibold">Relatórios</h1>
      <p className="text-muted-foreground">
        Gere relatórios financeiros por período.
      </p>
    </div>

    <ReportsClient />
  </div>
);

export default ReportsPage;
