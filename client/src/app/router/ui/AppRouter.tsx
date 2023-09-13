import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { routeConfig } from "../config/routeConfig";
import { NotAvailable } from "../../../pages/NotAvailable";
import { Context } from "../../../main";
import UserStore from "../../store/UserStore";

const routes = routeConfig;
export const AppRouter = () => {
  const {user} = useContext(Context) as UserStore

  console.log(user)

  return (
    <Routes>
      {routes.map((route) => {
        if (route.authOnly && user.isAuth) {
          return (
            <Route
              key={route.path}
              path={route.path}
              element={<NotAvailable />}
            />
          );
        }
        return (
          <Route key={route.path} path={route.path} element={route.element} />
        );
      })}
    </Routes>
  );
};
