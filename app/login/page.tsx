import Image from "next/image";
import LoginForm from "./_components/login-form";

const LoginPage = () => (
  <div className="flex min-h-screen items-center justify-center bg-slate-50 p-4">
    <div className="w-full max-w-sm space-y-6">
      <div className="flex flex-col items-center gap-3">
        <Image src="/logo.png" alt="Alterdata" width={180} height={40} priority unoptimized />
        <p className="text-sm text-slate-500">
          Entre com suas credenciais para acessar
        </p>
      </div>
      <LoginForm />
    </div>
  </div>
);

export default LoginPage;
