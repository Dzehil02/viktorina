import { lazy } from "react";

export const AuthAsync = lazy(() => new Promise(resolve => {
    //@ts-ignore
    setTimeout(() => resolve(import('./Auth')), 1500)
}));
