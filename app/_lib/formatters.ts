import { format, parseISO } from "date-fns";
import { ptBR } from "date-fns/locale";

export const formatCurrency = (value: number): string =>
  new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);

export const formatDate = (dateString: string): string =>
  format(parseISO(dateString), "dd/MM/yyyy", { locale: ptBR });

export const formatDateTime = (dateString: string): string =>
  format(parseISO(dateString), "dd/MM/yyyy HH:mm", { locale: ptBR });

export const formatDateISO = (date: Date): string =>
  format(date, "yyyy-MM-dd");

export const formatMonthName = (month: number): string => {
  const d = new Date(2024, month - 1);
  return format(d, "MMM", { locale: ptBR });
};
