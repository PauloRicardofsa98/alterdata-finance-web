"use client";

import { Button } from "@/app/_components/ui/button";
import { Input } from "@/app/_components/ui/input";
import { Label } from "@/app/_components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/_components/ui/select";
import { Search } from "lucide-react";
import { TransactionType } from "@/app/_models/transaction";

interface ReportFiltersProps {
  startDate: string;
  endDate: string;
  type: string;
  onStartDateChange: (value: string) => void;
  onEndDateChange: (value: string) => void;
  onTypeChange: (value: string) => void;
  onSubmit: () => void;
  isLoading: boolean;
}

const ReportFilters = ({
  startDate,
  endDate,
  type,
  onStartDateChange,
  onEndDateChange,
  onTypeChange,
  onSubmit,
  isLoading,
}: ReportFiltersProps) => (
  <div className="flex flex-wrap items-end gap-4">
    <div className="space-y-2">
      <Label htmlFor="startDate">Data Inicial</Label>
      <Input
        id="startDate"
        type="date"
        value={startDate}
        onChange={(e) => onStartDateChange(e.target.value)}
      />
    </div>

    <div className="space-y-2">
      <Label htmlFor="endDate">Data Final</Label>
      <Input
        id="endDate"
        type="date"
        value={endDate}
        onChange={(e) => onEndDateChange(e.target.value)}
      />
    </div>

    <div className="space-y-2">
      <Label>Tipo</Label>
      <Select value={type} onValueChange={onTypeChange}>
        <SelectTrigger className="w-[150px]">
          <SelectValue placeholder="Todos" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">Todos</SelectItem>
          <SelectItem value={TransactionType.Expense}>Despesas</SelectItem>
          <SelectItem value={TransactionType.Revenue}>Receitas</SelectItem>
        </SelectContent>
      </Select>
    </div>

    <Button onClick={onSubmit} disabled={isLoading || !startDate || !endDate}>
      <Search className="size-4" />
      {isLoading ? "Gerando..." : "Gerar Relatório"}
    </Button>
  </div>
);

export default ReportFilters;
