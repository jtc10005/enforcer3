export class PostItem {
  postId: number;
  text: string;
  timestamp: Date;
  tags: string[];
  trueCount?: number;
  parentPostId?: number;

  constructor() {
    this.postId = undefined;
    this.text = undefined;
    this.timestamp = undefined;
    this.tags = [];
    this.trueCount = 0;
    this.parentPostId = undefined;
  }
}

export declare type Posts = PostItem[];
