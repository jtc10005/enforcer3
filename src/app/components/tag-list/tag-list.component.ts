import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-tag-list',
  templateUrl: './tag-list.component.html',
  styleUrls: ['./tag-list.component.scss']
})
export class TagListComponent implements OnInit, OnChanges {
  @Input() tags: string[];
  @Input() postText: string;
  constructor(private as: AppService) { }

  ngOnInit() { }

  ngOnChanges(changes) {
    if (changes.postText && this.postText && this.postText !== '') {
      this.tags = this.as.parseTags(this.postText);
    }
  }
}
