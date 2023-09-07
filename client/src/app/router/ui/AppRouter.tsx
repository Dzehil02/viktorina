import { Route, Routes } from "react-router-dom";
import { routeConfig } from "../config/routeConfig";

const routes = routeConfig;
export const AppRouter = () => {
//   const isAuth = true;

  return (
    <Routes>
      {routes.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
};
