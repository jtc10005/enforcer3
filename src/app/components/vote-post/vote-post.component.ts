import { Component, OnInit, Input } from '@angular/core';
import { PostItem } from 'src/app/models/postItem';
import { post } from 'selenium-webdriver/http';
import { AppService } from 'src/app/app.service';
import { VoteItem, VoteType } from 'src/app/models/voteItem';

@Component({
  selector: 'app-vote-post',
  templateUrl: './vote-post.component.html',
  styleUrls: ['./vote-post.component.scss']
})
export class VotePostComponent implements OnInit {
  @Input() post: PostItem;
  @Input() postId: string;
  alreadyVotedUp = false;
  alreadyVotedDown = false;

  constructor(private as: AppService) { }

  ngOnInit() {
    if (this.post && !this.post.votes) {
      this.post.votes = [];
    }
  }
  vote(vote: number) {
    if (this.post.trueCount === 0 && vote === -1) {
      return;
    }
    this.alreadyVotedUp = vote === 1;
    this.alreadyVotedDown = vote === -1;
    // this.post.trueCount += vote;
    this.post.votes.push(new VoteItem({ VoteType: vote === 1 ? VoteType.UP : VoteType.DOWN, UserId: this.as.userId }));
    // this.post.calculateVoteTotal();
    this.as.updatePost(this.post);
  }
}
