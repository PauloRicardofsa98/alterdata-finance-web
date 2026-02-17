"use server";

import { cookies } from "next/headers";
import { authService } from "@/app/_services/auth";

export const login = async (email: string, password: string) => {
  try {
    const data = await authService.login(email, password);

    const cookieStore = await cookies();
    cookieStore.set("auth-token", data.token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24,
      path: "/",
    });

    return { success: true as const };
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : "Erro ao fazer login. Tente novamente.";

    const apiMessage =
      (error as { response?: { data?: { message?: string } } })?.response?.data
        ?.message ?? message;

    return { success: false as const, error: apiMessage };
  }
};
