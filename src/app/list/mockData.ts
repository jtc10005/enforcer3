import { Posts } from '../models/postItem';
import { of, Observable } from 'rxjs';

export const MockData: Posts = [
  {
    text: 'test',
    timestamp: new Date(),
    tags: ['new', 'firstPost']
  },
  {
    text: 'i dont like him',
    timestamp: new Date(),
    tags: ['JohnDoe', 'BadPerson']
  },
  {
    text: 'He is not so bad',
    timestamp: new Date(),
    tags: ['JohnDoe', 'JustMisunderstood']
  },
  {
    text: 'the make me work!!!',
    timestamp: new Date(),
    tags: ['resist', 'notGonnaDoit']
  }
];

export function getMockData(): Observable<any> {
  return of(MockData);
}
