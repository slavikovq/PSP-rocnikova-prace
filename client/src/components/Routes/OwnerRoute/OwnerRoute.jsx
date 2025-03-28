import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../../context/AuthProvider";

export default function OwnerRoute() {
  const { user, isLoading } = useAuth();
  console.log(user);
  console.log(isLoading);

  if (isLoading) return <p>Loading</p>;

  return user.role === "owner" ? (
    <Outlet />
  ) : (
    <Navigate to={"/panel/edit-profile"} replace />
  );
}
