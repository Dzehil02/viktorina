import { useContext, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routeConfig } from "../config/routeConfig";
import { NotAvailable } from "../../../pages/NotAvailable";
import { Context } from "../../../main";
import { observer } from "mobx-react-lite";

const routes = routeConfig;
export const AppRouter = observer(() => {
  const { user } = useContext(Context);

  console.log(user.isAuth);

  return (
    <Suspense fallback={<div>Loading ...</div>}>
      <Routes>
        {routes.map((route) => {
          if (route.authOnly && !user.isAuth) {
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
    </Suspense>
  );
});
