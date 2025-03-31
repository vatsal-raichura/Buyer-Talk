import { Navigate, Outlet } from "react-router-dom";

const BusinessPrivateRoutes = () => {
    const role = localStorage.getItem("role");  // Get the role from storage

    return role === "business" ? <Outlet /> : <Navigate to="/businessLogin" />;
};

export default BusinessPrivateRoutes;