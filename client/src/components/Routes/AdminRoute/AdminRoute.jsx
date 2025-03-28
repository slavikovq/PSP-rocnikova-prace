import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../../context/AuthProvider";

export default function AdminRoute() {
  const { user, isLoading } = useAuth();

  if (isLoading) return <p>Loading</p>;

  return user.role === "admin" || user.role === "owner" ? (
    <Outlet />
  ) : (
    <Navigate to={"/panel/edit-profile"} replace />
  );
}
