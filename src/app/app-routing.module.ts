import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { AppRoute, AppRoutes } from './models';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { SubmitNewPostComponent } from './submit-new-post/submit-new-post.component';

const homeRoute: AppRoute = {
  path: '',
  redirectTo: 'list',
  ShowInMenu: false,
  pathMatch: 'full'
};

const listRoute: AppRoute = {
  path: 'list',
  component: ListComponent,
  ShowInMenu: true,
  MenuTitle: 'Posts'
};

const postDetailRoute: AppRoute = {
  path: 'list/post/:id',
  component: PostDetailComponent,
  ShowInMenu: false,
};

// const SubmitNew: AppRoute = {
//   path: 'submitNew',
//   component: SubmitNewPostComponent,
//   ShowInMenu: true,
//   MenuTitle: 'Submit New'
// };

export const routes: AppRoutes = [homeRoute, listRoute, postDetailRoute]; //, SubmitNew];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
