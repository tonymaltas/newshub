import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  constructor() { }

  setIndex(newsIndex: number) {
    localStorage.setItem('index', newsIndex.toString());
  }

  getIndex(): number {
    const index = localStorage.getItem('index');
    if(!index) {
      return 0;
    }
    return parseInt(index);
  }
}
