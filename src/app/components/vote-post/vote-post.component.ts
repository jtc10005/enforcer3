import { Component, OnInit, Input } from '@angular/core';
import { PostItem } from 'src/app/models/postItem';
import { post } from 'selenium-webdriver/http';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-vote-post',
  templateUrl: './vote-post.component.html',
  styleUrls: ['./vote-post.component.scss']
})
export class VotePostComponent implements OnInit {
  @Input() post: PostItem;

  alreadyVotedUp = false;
  alreadyVotedDown = false;

  constructor(private as: AppService) { }

  ngOnInit() { }

  vote(vote: number) {
    if (this.post.trueCount === 0 && vote === -1) {
      return;
    }
    this.alreadyVotedUp = vote === 1;
    this.alreadyVotedDown = vote === -1;
    this.post.trueCount += vote;
    this.as.updatePost(this.post);
  }
}
