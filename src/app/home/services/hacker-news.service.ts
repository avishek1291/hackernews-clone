import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { map } from 'rxjs/operators';
import { of } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class HackerNewsService {
  constructor(private httpService: HttpClient) {}
  // https://hn.algolia.com/api/v1/search?page=1&hitsPerPage=10
  getLatestPost(page = 0) {
      return this.httpService
      .get(`${environment.baseApi}?page=${page}&hitsPerPage=20`)
      .pipe(map((events: any) => events.hits));
  }

  hidePost(Id) {
    const persistantData = JSON.parse(localStorage.getItem('posts')) as Array<
      any
    >;
    const newData = persistantData.map((el) => {
      // tslint:disable-next-line:radix
      if (parseInt(el.objectID) === parseInt(Id)) {
        return {
          ...el,
          hideElement: true,
        };
      } else {
        return { ...el };
      }
    });
    localStorage.clear();
    localStorage.setItem('posts', JSON.stringify(newData));
    return of(JSON.parse(localStorage.getItem('posts')));
  }

  upVotePost(Id) {
    const persistantData = JSON.parse(localStorage.getItem('posts')) as Array<
      any
    >;
    const newData = persistantData.map((el) => {
      // tslint:disable-next-line:radix
      if (parseInt(el.objectID) === parseInt(Id)) {
        return {
          ...el,
          points: el.points + 1,
        };
      } else {
        return { ...el };
      }
    });
    localStorage.clear();
    localStorage.setItem('posts', JSON.stringify(newData));
    return of(JSON.parse(localStorage.getItem('posts')));
  }
}
