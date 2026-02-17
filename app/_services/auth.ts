import axios from "axios";

const API_URL = process.env.API_URL || process.env.NEXT_PUBLIC_API_URL;

interface LoginResponse {
  token: string;
  name: string;
  email: string;
  expiresAt: string;
}

export const authService = {
  async login(email: string, password: string): Promise<LoginResponse> {
    const { data } = await axios.post<LoginResponse>(
      `${API_URL}/auth/login`,
      { email, password },
      { headers: { "Content-Type": "application/json" } }
    );
    return data;
  },
};
