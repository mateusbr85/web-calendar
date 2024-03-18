import { Navigate, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { Axios } from "../../utils/axios";

interface PrivateRouterProps {
    redirectTo: string;
}

export const PrivateRouter = ({ redirectTo }: PrivateRouterProps) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
    const token = localStorage.getItem("token");


    useEffect(() => {
        const checkAuthentication = async () => {
            if (token) {
                try {
                    const res = await Axios.get(`/api/auth/authenticated/me/${token}`);
                    setIsAuthenticated(res.data.response.isAuth);
                } catch (error) {
                    setIsAuthenticated(false);
                    alert("Usuário inválido!");
                }
            } else {
                setIsAuthenticated(false);
            }

            // Ocultar o spinner após 3 segundos
            setTimeout(() => {
            }, 600);
        };

        checkAuthentication();
    }, [token]);


    return isAuthenticated ? <Outlet/> : <Navigate to={redirectTo} />
}