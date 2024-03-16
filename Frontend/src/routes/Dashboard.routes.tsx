import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { NotFound } from "../pages/NotFound"
import { Login } from "../pages/Login"

export const DashboardRoutes = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Login />} path="/login">
                    {/* <Route element={<Login />} path="/"></Route> */}
                </Route>
                <Route element={<NotFound />} path="/404" />
                <Route element={<Navigate to="/404" />} path="*" />
            </Routes>
        </BrowserRouter>
    )
}