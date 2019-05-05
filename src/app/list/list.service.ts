import { Injectable } from '@angular/core';
import { MockData, getMockData } from './mockData';
import { of, Observable, Subject } from 'rxjs';
import { ServiceAction } from '../models/serviceAction';
import { from } from 'rxjs';
import { PostItem } from '../models/postItem';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  private action = new Subject<ServiceAction>();
  serviceAction = this.action.asObservable();

  postData: PostItem[];
  constructor() {
    this.fetchPosts();
  }

  fetchPosts() {
    of(MockData).subscribe(data => {
      this.postData = data;
      // const sa: ServiceAction = { Type: 'POST_RCVD', Data: data };
      // this.action.next(sa);
    });
  }

  addPost(post: PostItem) {
    const posts = this.postData;
    post.tags = this.parseTags(post.text);
    posts.push(post);
    this.postData = posts.sort((x, y) => {
      return y.timestamp.getTime() - x.timestamp.getTime();
    });
  }

  parseTags(text: string): string[] {
    return text && text.length ? text.match(/#\w+/g) : [];
  }
}
