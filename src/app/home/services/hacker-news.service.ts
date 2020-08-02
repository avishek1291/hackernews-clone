import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { baseUrl } from '../../../environments/environment';
import { map } from 'rxjs/operators';
import { of } from 'rxjs';
@Injectable({
    providedIn: 'root'
})

export class HackerNewsService {
    constructor(private httpService: HttpClient){}

    getLatestPost(){
        return this.httpService.get(`${baseUrl.baseApi}?tags=front_page`).pipe(map((events: any) => events.hits));
        // .subscribe(data => {
        //      if (data) {
        //          window.localStorage.setItem('posts', data);
        //      }
        //      return of(window.localStorage.get('posts'));
        // });
    }

    hidePost(Id){

    }
}
