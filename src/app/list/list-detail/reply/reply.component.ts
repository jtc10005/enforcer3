import { Component, OnInit, Input } from '@angular/core';
import { AppService } from '../../../app.service';
import { PostItem } from 'src/app/models/postItem';

@Component({
  selector: 'app-reply',
  templateUrl: './reply.component.html',
  styleUrls: ['./reply.component.scss']
})
export class ReplyComponent implements OnInit {
  @Input() PostId: number;
  show = false;
  replies: PostItem[];
  constructor(private ls: AppService) {}

  ngOnInit() {}

  showReplies() {
    this.show = !this.show;
    if (this.show) {
      // this.ls.fetchReplies(this.PostId).subscribe(res => {
      //   this.replies = res;
      // });
    }
  }
}
