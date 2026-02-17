const ReportsLoading = () => (
  <div className="space-y-4">
    <div className="space-y-2">
      <div className="h-8 w-32 animate-pulse rounded bg-muted" />
      <div className="h-4 w-64 animate-pulse rounded bg-muted" />
    </div>

    <div className="flex flex-wrap items-end gap-4">
      {Array.from({ length: 3 }).map((_, i) => (
        <div key={i} className="space-y-2">
          <div className="h-4 w-20 animate-pulse rounded bg-muted" />
          <div className="h-9 w-40 animate-pulse rounded bg-muted" />
        </div>
      ))}
      <div className="h-9 w-36 animate-pulse rounded bg-muted" />
    </div>
  </div>
);

export default ReportsLoading;
