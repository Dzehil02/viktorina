import { RouteObject } from "react-router-dom";
import { MyTestList } from "../../../pages/TestList/MyTestList/MyTestList";
import { AppRoutes } from "../consts/consts";
import { PassedTestList } from "../../../pages/TestList/PassedTestList/PassedTestList";
import { NotFoundPage } from "../../../pages/NotFoundPage";
import { UserRole } from "../../../entities/User/model/consts/consts";
import { Auth } from "../../../pages/Auth";
import { Main } from "../../../pages/Main";

export interface RouteObj extends RouteObject {
    authOnly?: boolean;
    roles?: UserRole[];
}

export const routeConfig: RouteObj[] = [
    {
        path: AppRoutes.MAIN,
        element: <Main />,
    },
    {
        path: AppRoutes.REGISTRATION,
        element: <Auth />,
    },
    {
        path: AppRoutes.LOGIN,
        element: <Auth />,
    },
    {
        path: AppRoutes.TESTS,
        element: <MyTestList />,
        authOnly: true,
    },
    {
        path: AppRoutes.PASSED_TESTS,
        element: <PassedTestList />,
        authOnly: true,
    },
    {
        path: '*',
        element: <NotFoundPage />
    },
];