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
    this.postCollection.snapshotChanges().subscribe(data => {
      this.postData = data.map(e => {
        const post = e.payload.doc.data() as PostItem;
        post.postId = e.payload.doc.id;
        post.timestamp = new Date(post.timestamp);
        post.trueCount = !post.trueCount ? 0 : post.trueCount;
        return post;
      });
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
  }

  updatePost(post: PostItem) {
    this.postCollection.doc(post.postId).set(post);
  }

  parseTags(text: string): string[] {
    return text && text.length ? text.match(/#\w+/g) : [];
  }
}
