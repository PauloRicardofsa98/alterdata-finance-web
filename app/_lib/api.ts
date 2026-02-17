import axios from "axios";
import { cookies } from "next/headers";

const API_URL = process.env.API_URL || process.env.NEXT_PUBLIC_API_URL;

export const getApi = async () => {
  const cookieStore = await cookies();
  const token = cookieStore.get("auth-token")?.value;

  const instance = axios.create({
    baseURL: API_URL,
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
  });

  instance.interceptors.response.use(
    (response) => response,
    (error) => {
      const message =
        error.response?.data?.message || "Erro inesperado. Tente novamente.";
      return Promise.reject(new Error(message));
    },
  );

  return instance;
};
