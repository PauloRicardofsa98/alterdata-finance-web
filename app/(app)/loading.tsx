import { Card, CardContent } from "@/app/_components/ui/card";

const DashboardLoading = () => (
  <>
    <div className="flex items-center justify-between">
      <div className="space-y-2">
        <div className="h-7 w-32 animate-pulse rounded-lg bg-slate-200" />
        <div className="h-4 w-56 animate-pulse rounded-lg bg-slate-200" />
      </div>
      <div className="h-9 w-32 animate-pulse rounded-lg bg-slate-200" />
    </div>

    <div className="grid gap-4 sm:grid-cols-3 lg:gap-6">
      {Array.from({ length: 3 }).map((_, i) => (
        <Card key={i}>
          <CardContent className="p-4 sm:p-6">
            <div className="flex items-start justify-between">
              <div className="space-y-3">
                <div className="h-4 w-24 animate-pulse rounded-lg bg-slate-200" />
                <div className="h-9 w-32 animate-pulse rounded-lg bg-slate-200" />
              </div>
              <div className="size-10 animate-pulse rounded-lg bg-slate-200" />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>

    <div className="grid gap-4 lg:grid-cols-2 lg:gap-6">
      {Array.from({ length: 2 }).map((_, i) => (
        <Card key={i}>
          <CardContent className="p-4 sm:p-6">
            <div className="mb-4 h-5 w-48 animate-pulse rounded-lg bg-slate-200" />
            <div className="h-[300px] animate-pulse rounded-lg bg-slate-100" />
          </CardContent>
        </Card>
      ))}
    </div>
  </>
);

export default DashboardLoading;
