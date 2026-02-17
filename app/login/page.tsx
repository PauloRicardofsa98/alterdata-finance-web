import { DollarSign } from "lucide-react";
import LoginForm from "./_components/login-form";

const LoginPage = () => (
  <div className="flex min-h-screen items-center justify-center bg-slate-50 p-4">
    <div className="w-full max-w-sm space-y-6">
      <div className="flex flex-col items-center gap-2">
        <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10">
          <DollarSign className="size-6 text-primary" />
        </div>
        <h1 className="text-xl font-bold text-slate-900">Alterdata Finance</h1>
        <p className="text-sm text-slate-500">
          Entre com suas credenciais para acessar
        </p>
      </div>
      <LoginForm />
    </div>
  </div>
);

export default LoginPage;
