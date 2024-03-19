import { Navigate, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { Axios } from "../../utils/axios";

interface PrivateRouterProps {
    redirectTo: string;
}

export const PrivateRouter = ({ redirectTo }: PrivateRouterProps) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
    const [showSpinner, setShowSpinner] = useState(true);
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
                setShowSpinner(false);
            }, 600);
        };

        checkAuthentication();
    }, [token]);

    if(showSpinner) {
        return(
            <div
                className="flex justify-center items-center"
            >
                <i className="fas fa-spinner fa-pulse"></i>
            </div>
        )
    }


    return isAuthenticated ? <Outlet/> : <Navigate to={redirectTo} />
}