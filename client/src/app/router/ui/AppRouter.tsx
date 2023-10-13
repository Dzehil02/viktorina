import { useContext, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from '../config/routeConfig';
import { NotAvailable } from '../../../pages/NotAvailable';
import { Context } from '../../../main';
import { observer } from 'mobx-react-lite';

const routes = routeConfig;
export const AppRouter = observer(() => {
    const { user } = useContext(Context);

    console.log(user.isAuth);

    return (
        <Suspense fallback={<div>Loading ...</div>}>
            <Routes>
                {routes.map(({ path, element, authOnly }) => {
                    if (authOnly && !user.isAuth) {
                        return (
                            <Route
                                key={path}
                                path={path}
                                element={<NotAvailable />}
                            />
                        );
                    }
                    return (
                        <Route
                            key={path}
                            path={path}
                            element={element}
                        />
                    );
                })}
            </Routes>
        </Suspense>
    );
});
