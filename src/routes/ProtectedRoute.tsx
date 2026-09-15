import { Navigate, Outlet } from "react-router";

export function ProtectedRoute() {
  const isAuthenticated = Boolean(localStorage.getItem("accessToken"));

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}
