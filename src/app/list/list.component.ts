import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppService } from '../app.service';
import { Posts, PostItem } from '../models/postItem';
import { takeUntil } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnDestroy {
  destroy = new Subject<any>();
  private addNew = false;
  // private posts: Posts = [];

  get posts() {
    return this.ls.postData;
  }

  constructor(private ls: AppService) { }

  ngOnInit() {
    // this.ls.serviceAction.pipe(takeUntil(this.destroy)).subscribe(act => {
    //   switch (act.Type) {
    //     case 'POST_RCVD':
    //       this.posts = act.Data;
    //       break;
    //   }
    // });
    // this.ls.fetchPosts();
  }

  ngOnDestroy() {
    this.destroy.next();
    this.destroy.complete();
  }

  addNewPost(np: PostItem) {
    this.ls.addPost(np);
    this.addNew = false;
  }
}
