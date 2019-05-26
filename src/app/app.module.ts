import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListComponent } from './list/list.component';
import { HomeComponent } from './home/home.component';
import { AppMaterialModule } from './app-material/app-material.module';
import { HeaderComponent, AddPostComponent } from './components';
import { ListDetailComponent } from './list/list-detail/list-detail.component';
import { TagListComponent } from './components/tag-list/tag-list.component';

import { ReactiveFormsModule } from '@angular/forms';
import { VotePostComponent } from './list/list-detail/vote-post/vote-post.component';
import { ReplyComponent } from './list/list-detail/reply/reply.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { SubmitNewPostComponent } from './submit-new-post/submit-new-post.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { firebaseConfig } from './firebase.config';
import { AngularFirestore } from '@angular/fire/firestore';

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
    ReplyComponent,
    PostDetailComponent,
    SubmitNewPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
