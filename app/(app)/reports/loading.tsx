import { Card, CardContent } from "@/app/_components/ui/card";

const ReportsLoading = () => (
  <>
    <div className="space-y-2">
      <div className="h-7 w-32 animate-pulse rounded-lg bg-slate-200" />
      <div className="h-4 w-64 animate-pulse rounded-lg bg-slate-200" />
    </div>

    <Card>
      <CardContent className="p-4 sm:p-6">
        <div className="flex flex-wrap items-end gap-4">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="space-y-2">
              <div className="h-3 w-20 animate-pulse rounded bg-slate-200" />
              <div className="h-9 w-40 animate-pulse rounded-lg bg-slate-100" />
            </div>
          ))}
          <div className="h-9 w-36 animate-pulse rounded-lg bg-slate-200" />
        </div>
      </CardContent>
    </Card>
  </>
);

export default ReportsLoading;
