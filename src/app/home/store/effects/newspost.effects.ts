import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { HackerNewsService } from '../../services/hacker-news.service';
import * as newsPostActions from '../actions/newspost.action';
import { Injectable } from '@angular/core';
@Injectable()
export class NewsPostEffects {

    constructor(private action$: Actions, private newsPostService: HackerNewsService){}

    GetNewsPosts$: Observable<Action> = createEffect(() =>
    this.action$.pipe(
      ofType(newsPostActions.getNewsPosts),
      mergeMap(action =>
        this.newsPostService.getLatestPost()
          .pipe(
            map((data: any) => {
              return newsPostActions.getNewsPostsSuccess({ response: data });
            }),
            catchError((error: Error) => {
              return of(newsPostActions.getNewsPostsFailure({error}));
            })
          )
      )
    )
  );


  HidePost$: Observable<Action> = createEffect(() =>
    this.action$.pipe(
      ofType(newsPostActions.hidePost),
      mergeMap(action =>
        this.newsPostService.getLatestPost()
          .pipe(
            map((data: any) => {
              return newsPostActions.getNewsPostsSuccess({ response: data });
            }),
            catchError((error: Error) => {
              return of(newsPostActions.getNewsPostsFailure({error}));
            })
          )
      )
    )
  );

}


