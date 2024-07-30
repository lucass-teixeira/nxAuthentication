import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'landing2',
    loadChildren: () => import('landing2/Routes').then((m) => m.remoteRoutes),
  },
  {
    path: 'shop',
    loadChildren: () => import('shop/Routes').then((m) => m.remoteRoutes),
  },
  {
    path: 'mobile',
    loadChildren: () => import('mobile-web-client/Routes').then((m) => m.appRoutes),
  },
  {
    path: 'home',
    component: NxWelcomeComponent,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];
