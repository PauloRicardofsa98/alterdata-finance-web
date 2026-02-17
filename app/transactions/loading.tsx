const TransactionsLoading = () => (
  <div className="space-y-4">
    <div className="space-y-2">
      <div className="h-8 w-32 animate-pulse rounded bg-muted" />
      <div className="h-4 w-56 animate-pulse rounded bg-muted" />
    </div>

    <div className="flex items-center justify-between">
      <div className="h-9 w-64 animate-pulse rounded bg-muted" />
      <div className="h-9 w-36 animate-pulse rounded bg-muted" />
    </div>

    <div className="rounded-md border">
      <div className="space-y-0">
        <div className="flex h-10 items-center border-b bg-muted/50 px-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="h-4 flex-1 animate-pulse rounded bg-muted"
              style={{ maxWidth: i === 5 ? 80 : 120, marginRight: 16 }}
            />
          ))}
        </div>
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="flex h-12 items-center border-b px-4">
            {Array.from({ length: 6 }).map((_, j) => (
              <div
                key={j}
                className="h-4 flex-1 animate-pulse rounded bg-muted"
                style={{ maxWidth: j === 5 ? 80 : 120, marginRight: 16 }}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default TransactionsLoading;
