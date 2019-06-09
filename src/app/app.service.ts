import { Injectable } from '@angular/core';

import { PostItem } from './models/postItem';
import { AngularFirestore } from '@angular/fire/firestore';
import { firestore } from 'firebase';
import { ConvertTimeStampToJSDate, calculateVoteTotal } from './utilities';
import { UserService } from './user.service';
import { Subject } from 'rxjs';
import { ServiceAction } from './models/serviceAction';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private action = new Subject<ServiceAction>();
  serviceAction = this.action.asObservable();

  postCollection = this.fs.collection('post');

  get userId() {
    return this.us.UserInfo ? this.us.UserInfo.UserID : undefined;
  }

  postData: PostItem[] = [];
  constructor(private fs: AngularFirestore, private us: UserService) {
    this.fetchPosts();
  }

  showNewPost() {
    this.action.next({ Type: 'SHOW_ADD_NEW_POST' });
  }

  fetchPosts() {
    this.postCollection.snapshotChanges().subscribe(data => {
      this.postData = data ? data.map(e => {
        const post = e.payload.doc.data() as PostItem;
        post.postId = e.payload.doc.id;
        post.timestamp = ConvertTimeStampToJSDate(post.timestamp);
        post.trueCount = !post.trueCount ? 0 : post.trueCount;
        return post;
      }) : [];
    });
  }

  fetchReplies(PostId: number) {
    // const md = MockData.filter(x => x.parentPostId === PostId);
    // return of(md);
  }

  addPost(post: PostItem) {
    // const posts = this.postData;
    post.userId = this.userId;
    post.tags = this.parseTags(post.text);
    post.timestamp = !post.timestamp ? new Date() : post.timestamp;
    post.trueCount = 0;
    // IF user logged in add userid
    this.postCollection.add(post);
  }

  updatePost(post: PostItem) {
    calculateVoteTotal(post);
    const p = { ...post };
    const v = post.votes.map(v => ({ ...v }));
    p.votes = v;
    this.postCollection.doc(post.postId).update({ ...p });
  }

  parseTags(text: string): string[] {
    return text && text.length ? text.match(/#\w+/g) : [];
  }
}
