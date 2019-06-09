import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppService } from '../app.service';
import { Posts, PostItem } from '../models/postItem';
import { map, tap, takeUntil } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import { ServiceAction } from '../models/serviceAction';
import { SlideInOutAnimation } from '../components/animations';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  animations: [SlideInOutAnimation]
})
export class ListComponent implements OnInit, OnDestroy {
  destroy: Subject<boolean> = new Subject<boolean>();
  animationState = 'out';
  // private addNew = false;
  // private posts: Posts = [];

  get posts() {
    return this.ls.postData ? this.ls.postData : [];
  }

  constructor(private ls: AppService) { }

  ngOnInit() {
    this.ls.serviceAction.pipe(takeUntil(this.destroy)).subscribe((action: ServiceAction) => {
      switch (action.Type) {
        case 'SHOW_ADD_NEW_POST':
          // this.addNew = !this.addNew;
          this.animationState = this.animationState === 'in' ? 'out' : 'in';
          return;
      }
    });
  }

  ngOnDestroy() {
  }

  addNewPost(np: PostItem) {
    this.ls.addPost(np);
    // this.addNew = false;
  }
}
