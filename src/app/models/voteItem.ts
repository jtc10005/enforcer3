export class VoteItem {
  VoteType: VoteType;
  UserId: string;
  constructor(options?: { VoteType: VoteType, UserId: string }) {
    this.VoteType = options ? options.VoteType : undefined;
    this.UserId = options ? options.UserId : undefined;
  }
}

export enum VoteType {
  UP,
  DOWN
}
