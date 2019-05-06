import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListComponent } from './list/list.component';
import { HomeComponent } from './home/home.component';
import { AppMaterialModule } from './app-material/app-material.module';
import { HeaderComponent } from './components';
import { ListDetailComponent } from './list/list-detail/list-detail.component';
import { TagListComponent } from './list/list-detail/tag-list/tag-list.component';
import { AddPostComponent } from './list/add-post/add-post.component';
import { ReactiveFormsModule } from '@angular/forms';
import { VotePostComponent } from './list/list-detail/vote-post/vote-post.component';
import { ReplyComponent } from './list/list-detail/reply/reply.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    HomeComponent,
    HeaderComponent,
    ListDetailComponent,
    TagListComponent,
    AddPostComponent,
    VotePostComponent,
    ReplyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
