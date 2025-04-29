import { Navigate, Outlet } from "react-router-dom";

const AdminPrivateRoutes = () => {
    const role = localStorage.getItem("role");  // Get the role from storage

    return role === "admin" ? <Outlet /> : <Navigate to="/adminLogin" />;
};

export default AdminPrivateRoutes;