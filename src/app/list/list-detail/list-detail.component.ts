import { Component, OnInit, Input } from '@angular/core';
import { PostItem } from 'src/app/models/postItem';

@Component({
  selector: 'app-list-detail',
  templateUrl: './list-detail.component.html',
  styleUrls: ['./list-detail.component.scss']
})
export class ListDetailComponent implements OnInit {
  @Input() post: PostItem;
  @Input() showReplies = true;
  constructor() {}

  ngOnInit() {}
}
