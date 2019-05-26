import { Injectable } from '@angular/core';
import { MockData, getMockData } from './list/mockData';
import { of, Observable, Subject } from 'rxjs';
import { ServiceAction } from './models/serviceAction';
import { from } from 'rxjs';
import { PostItem } from './models/postItem';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  // private action = new Subject<ServiceAction>();
  // serviceAction = this.action.asObservable();

  postCollection = this.firestore.collection('post');

  postData: PostItem[];
  constructor(private firestore: AngularFirestore) {
    this.fetchPosts();
  }

  fetchPosts() {
    // of(MockData).subscribe(data => {
    //   data.forEach(x => {
    //     x.trueCount = x.trueCount ? x.trueCount : 0;
    //   });
    //   this.postData = data.filter(x => !x.parentPostId);
    // const sa: ServiceAction = { Type: 'POST_RCVD', Data: data };
    // this.action.next(sa);
    // });
    this.postCollection.snapshotChanges().subscribe(data => {
      const post: PostItem[] = data.map(e => {
        return new PostItem({ postId: e.payload.doc.id, ...e.payload.doc.data() });
      });
      post.forEach(x => {
        x.trueCount = x.trueCount ? x.trueCount : 0;
      });
      this.postData = post.filter(x => !x.parentPostId);
    });
  }

  fetchReplies(PostId: number) {
    const md = MockData.filter(x => x.parentPostId === PostId);
    return of(md);
  }

  addPost(post: PostItem) {
    const posts = this.postData;
    post.tags = this.parseTags(post.text);
    post.timestamp = !post.timestamp ? new Date() : post.timestamp;
    post.trueCount = 0;
    // IF user logged in add userid
    this.postCollection.add(post);
    // posts.push(post);
    // this.postData = posts.sort((x, y) => {
    //   return y.timestamp.getTime() - x.timestamp.getTime();
    // });
  }

  parseTags(text: string): string[] {
    return text && text.length ? text.match(/#\w+/g) : [];
  }
}
