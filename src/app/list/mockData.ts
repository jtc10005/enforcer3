import { Posts } from '../models/postItem';
import { of, Observable } from 'rxjs';

export const MockData: Posts = [
  {
    postId: '1',
    text: 'test',
    timestamp: new Date(),
    tags: ['new', 'firstPost']
  },
  {
    postId: '2',
    text: 'i dont like him',
    timestamp: new Date(),
    tags: ['JohnDoe', 'BadPerson']
  },
  {
    postId: '3',
    text: 'He is not so bad',
    timestamp: new Date(),
    tags: ['JohnDoe', 'JustMisunderstood'],
    parentPostId: 2
  },
  {
    postId: '4',
    text: 'the make me work!!!',
    timestamp: new Date(),
    tags: ['resist', 'notGonnaDoit']
  },
  {
    postId: '5',
    text: 'the make me work!!!',
    timestamp: new Date(),
    tags: ['resist', 'notGonnaDoit'],
    parentPostId: 2
  }
];

export function getMockData(): Observable<any> {
  return of(MockData);
}
