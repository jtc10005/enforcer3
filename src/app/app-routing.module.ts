import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { AppRoute, AppRoutes } from './models';

const homeRoute: AppRoute = {
  path: '',
  component: HomeComponent,
  ShowInMenu: true,
  MenuTitle: 'Home'
};

const listRoute: AppRoute = {
  path: 'list',
  component: ListComponent,
  ShowInMenu: true,
  MenuTitle: 'List'
};

export const routes: AppRoutes = [homeRoute, listRoute];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
