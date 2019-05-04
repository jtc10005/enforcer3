import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';

const homeRoute: Route = {
  path: '/',
  component: HomeComponent
};

const listRoute: Route = {
  path: '/list',
  component: ListComponent
};

const routes: Routes = [homeRoute, listRoute];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
