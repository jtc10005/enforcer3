export class PostItem {
  text: string;
  timestamp: Date;
  tags: string[];
  constructor() {
    this.text = undefined;
    this.timestamp = undefined;
    this.tags = [];
  }
}

export declare type Posts = PostItem[];
