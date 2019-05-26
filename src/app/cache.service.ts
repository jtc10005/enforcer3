import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CacheService {

  constructor() { }
  set(key: string, value: any) {
    localStorage.setItem(key, value);
  }

  get(key: string) {
    return localStorage.getItem(key);
  }

  delete(key: string) {
    localStorage.removeItem(key);
  }

  clearALL() {
    localStorage.clear();
  }
}
