import { createBrowserRouter, RouteObject } from "react-router-dom";
import Dashboard from "./Dashboard";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Dashboard />,
  },
];

export const router = createBrowserRouter(routes);
