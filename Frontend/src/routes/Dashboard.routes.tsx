import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { NotFound } from "../pages/NotFound"
import { LoginSignUp } from "../pages/Login"
import { PrivateRouter } from "./private/Private.routes"
import { CalendarPage } from "../pages/Calendar"

export const DashboardRoutes = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route element={<LoginSignUp />} path="/signup" />
                <Route element={<LoginSignUp />} path="/login" />
                <Route element={<NotFound />} path="/404" />
                <Route element={<Navigate to="/404" />} path="*" />
                <Route 
                    element={<PrivateRouter redirectTo="/login" />} 
                    path="/calendar" 
                >
                    <Route path="/calendar" element={<CalendarPage/>} />
                </Route>
                <Route element={<CalendarPage/>}  path="/oi"/>
            </Routes>
        </BrowserRouter>
    )
}