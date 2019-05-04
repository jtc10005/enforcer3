import { Route } from '@angular/router';

export interface AppRoute extends Route {
  ShowInMenu: boolean;
  MenuTitle?: string;
}

export declare type AppRoutes = AppRoute[];
