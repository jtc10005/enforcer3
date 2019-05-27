import { VoteItem, VoteType } from './voteItem';

export class PostItem {
  postId: string;
  text: string;
  timestamp: Date;
  tags: string[];
  trueCount?: number;
  parentPostId?: number;
  votes: VoteItem[] = [];
  userId: string;

  constructor(options?: {
    postId?: string,
    text?: string,
    timestamp?: Date,
    tags?: string[],
    trueCount?: number,
    parentPostId?: number,
    userId?: string
  }) {
    this.postId = options && options.postId ? options.postId : undefined;
    this.text = options && options.text ? options.text : '';
    this.timestamp = options && options.timestamp ? options.timestamp : new Date();
    this.tags = options && options.tags ? options.tags : [];
    this.trueCount = options && options.trueCount ? options.trueCount : 0;
    this.parentPostId = options && options.parentPostId ? options.parentPostId : undefined;
    this.userId = options && options.userId ? options.userId : undefined;
    this.votes = [];
  }

}

export declare type Posts = PostItem[];
