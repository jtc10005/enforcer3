export class PostItem {
  postId: string;
  text: string;
  timestamp: Date;
  tags: string[];
  trueCount?: number;
  parentPostId?: number;

  constructor(options?: {
    postId?: string,
    text?: string,
    timestamp?: Date,
    tags?: string[],
    trueCount?: number,
    parentPostId?: number
  }) {
    this.postId = undefined;
    this.text = undefined;
    this.timestamp = undefined;
    this.tags = [];
    this.trueCount = 0;
    this.parentPostId = undefined;
  }
}

export declare type Posts = PostItem[];
