import { createBrowserRouter } from "react-router";

import Dashboard from "../pages/Dashboard";
import NotFound from "../pages/NotFound";
import Profile from "../pages/Profile";
import Login from "../pages/Login";

import { MainLayout } from "../layout/MainLayout";
import { ProtectedRoute } from "./ProtectedRoute";

export const router = createBrowserRouter([
  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    element: <ProtectedRoute />,
    children: [
      {
        path: "/",
        element: <MainLayout />,
        children: [
          {
            index: true,
            element: <Dashboard />,
          },
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
    ],
  },
]);
export default router;
