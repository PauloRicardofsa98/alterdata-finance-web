"use client";

import { Button } from "@/app/_components/ui/button";

interface ErrorPageProps {
  error: Error;
  reset: () => void;
}

const ErrorPage = ({ error, reset }: ErrorPageProps) => (
  <div className="flex min-h-[50vh] flex-col items-center justify-center gap-4">
    <h2 className="text-xl font-semibold">Algo deu errado</h2>
    <p className="text-muted-foreground">
      {error.message || "Ocorreu um erro inesperado."}
    </p>
    <Button onClick={reset}>Tentar novamente</Button>
  </div>
);

export default ErrorPage;
