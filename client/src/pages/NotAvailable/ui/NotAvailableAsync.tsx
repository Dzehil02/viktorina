import { lazy } from 'react';

export const NotAvailableAsync = lazy(
    () =>
        new Promise((resolve) => {
            //@ts-ignore
            setTimeout(() => resolve(import('./NotAvailable')), 1500);
        }),
);
