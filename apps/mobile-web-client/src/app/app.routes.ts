import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {path: '', loadComponent: () => import('./home/home.page').then(x => x.HomePage)}
];
