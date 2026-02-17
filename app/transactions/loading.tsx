const TransactionsLoading = () => (
  <>
    <div className="space-y-2">
      <div className="h-7 w-32 animate-pulse rounded-lg bg-slate-200" />
      <div className="h-4 w-56 animate-pulse rounded-lg bg-slate-200" />
    </div>

    <div className="flex items-center justify-between">
      <div className="h-9 w-64 animate-pulse rounded-lg bg-slate-200" />
      <div className="h-9 w-36 animate-pulse rounded-lg bg-slate-200" />
    </div>

    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
      <div className="flex h-10 items-center border-b border-slate-100 px-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="h-3 flex-1 animate-pulse rounded bg-slate-200"
            style={{ maxWidth: i === 5 ? 80 : 120, marginRight: 16 }}
          />
        ))}
      </div>
      {Array.from({ length: 5 }).map((_, i) => (
        <div
          key={i}
          className="flex h-12 items-center border-b border-slate-100 px-4 last:border-0"
        >
          {Array.from({ length: 6 }).map((_, j) => (
            <div
              key={j}
              className="h-4 flex-1 animate-pulse rounded bg-slate-100"
              style={{ maxWidth: j === 5 ? 80 : 120, marginRight: 16 }}
            />
          ))}
        </div>
      ))}
    </div>
  </>
);

export default TransactionsLoading;
