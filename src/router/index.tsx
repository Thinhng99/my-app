import React from "react";
import { lazy } from "react";
import { Navigate, useLocation, useRoutes } from "react-router-dom";
import { isAuthenticated } from "../utils/Auth";
import Loadable from "../utils/Loadable";
import { path } from "./path";

//Auth
const AuthPage = Loadable(lazy(() => import("../page/Auth")));
//Layout
const Layout = Loadable(lazy(() => import("../page/Layout")));
const Chart = Loadable(lazy(() => import("../page/Chart")));

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
    {
      path: path.root,
      element: <Layout />,
      // element: isAuthenticated() ? (
      //   <Layout />
      // ) : (
      //   <Navigate to={path.login} state={{ from: location }} />
      // ),
      children: [
        {
          path: path.chart,
          element: <Chart />,
        },
      ],
    },
  ]);
};

export default Router;
