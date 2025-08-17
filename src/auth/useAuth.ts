import { useState } from "react";
import { login as apiLogin } from "../api/auth";

export function useAuth() {
    const [token, setToken] = useState<string | null>(
        localStorage.getItem("token")
    );

    const login = async (email: string, password: string) => {
        const { access_token } = await apiLogin(email, password);
        setToken(access_token);
        localStorage.setItem("token", access_token);
    };

    const logout = () => {
        setToken(null);
        localStorage.removeItem("token");
    };

    return { token, login, logout };
}