import { Component, OnInit, OnDestroy } from '@angular/core';
import { ListService } from './list.service';
import { Posts } from '../models/postItem';
import { takeUntil } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnDestroy {
  destroy = new Subject<any>();

  // private posts: Posts = [];

  get posts() {
    return this.ls.postData;
  }

  constructor(private ls: ListService) {}

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
}
