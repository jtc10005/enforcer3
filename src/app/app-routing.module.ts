import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { AppRoute, AppRoutes } from './models';
import { PostDetailComponent } from './post-detail/post-detail.component';

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

const postDetailRoute: AppRoute = {
  path: 'list/post/:id',
  component: PostDetailComponent,
  ShowInMenu: false,
};

export const routes: AppRoutes = [homeRoute, listRoute, postDetailRoute];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
