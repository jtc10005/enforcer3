import { PostItem } from './models/postItem';
import { VoteType } from './models/voteItem';

export function ConvertTimeStampToJSDate(timestamp: any): Date {
  return timestamp ? new Date(timestamp.toDate()) : undefined;
};

export function calculateVoteTotal(post: PostItem) {
  const posVote = post.votes.filter(x => x.VoteType === VoteType.UP).length;
  const negVote = post.votes.filter(x => x.VoteType === VoteType.DOWN).length;
  post.trueCount = posVote - negVote;
}
