import { Navigate, Outlet } from "react-router-dom";

const UserPrivateRoutes = () => {
    const role = localStorage.getItem("role");  // Get the role from storage

    return role === "user" ? <Outlet /> : <Navigate to="/login" />;
};

export default UserPrivateRoutes;