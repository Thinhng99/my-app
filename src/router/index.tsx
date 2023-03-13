import React from "react";
import { lazy } from "react";
import { Navigate, useLocation, useRoutes } from "react-router-dom";
import { isAuthenticated } from "../utils/Auth";
import Loadable from "../utils/Loadable";
import { path } from "./path";

const AuthPage = Loadable(lazy(() => import("../page/Auth")));

const Router = () => {
  const location = useLocation();
  return useRoutes([
    {
      path: path.login,
      element: isAuthenticated() ? (
        <Navigate to={path.root} state={{ from: location }} />
      ) : (
        <AuthPage />
      ),
    },
  ]);
};

export default Router;
