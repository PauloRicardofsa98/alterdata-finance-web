"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/app/_components/ui/button";

interface YearSelectorProps {
  year: number;
}

const YearSelector = ({ year }: YearSelectorProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const navigate = (newYear: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("year", String(newYear));
    router.push(`/?${params.toString()}`);
  };

  return (
    <div className="flex items-center gap-2">
      <Button variant="outline" size="icon-sm" onClick={() => navigate(year - 1)}>
        <ChevronLeft className="size-4" />
      </Button>
      <span className="min-w-[4rem] text-center text-lg font-semibold">
        {year}
      </span>
      <Button variant="outline" size="icon-sm" onClick={() => navigate(year + 1)}>
        <ChevronRight className="size-4" />
      </Button>
    </div>
  );
};

export default YearSelector;
