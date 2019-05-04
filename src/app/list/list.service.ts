import { Injectable } from '@angular/core';
import { MockData, getMockData } from './mockData';
import { of, Observable, Subject } from 'rxjs';
import { ServiceAction } from '../models/serviceAction';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  private action = new Subject<ServiceAction>();
  serviceAction = this.action.asObservable();

  constructor() {}

  fetchPosts() {
    of(MockData).subscribe(data => {
      const sa: ServiceAction = { Type: 'POST_RCVD', Data: data };
      this.action.next(sa);
    });
  }
}
