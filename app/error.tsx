"use client";

import { AlertCircle } from "lucide-react";
import { Button } from "@/app/_components/ui/button";

interface ErrorPageProps {
  error: Error;
  reset: () => void;
}

const ErrorPage = ({ error, reset }: ErrorPageProps) => (
  <div className="flex min-h-[50vh] flex-col items-center justify-center gap-4">
    <div className="flex size-12 items-center justify-center rounded-full bg-destructive/10">
      <AlertCircle className="size-6 text-destructive" />
    </div>
    <h2 className="text-xl font-bold text-slate-900">Algo deu errado</h2>
    <p className="text-sm text-slate-500">
      {error.message || "Ocorreu um erro inesperado."}
    </p>
    <Button onClick={reset}>Tentar novamente</Button>
  </div>
);

export default ErrorPage;
