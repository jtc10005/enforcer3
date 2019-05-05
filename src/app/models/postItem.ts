export class PostItem {
  text: string;
  timestamp: Date;
  tags: string[];
  trueCount?: number;


  constructor() {
    this.text = undefined;
    this.timestamp = undefined;
    this.tags = [];
    this.trueCount = 0;
  }
}

export declare type Posts = PostItem[];
