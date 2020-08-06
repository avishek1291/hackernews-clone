import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import { HackerNewsService } from '../../services/hacker-news.service';
import * as newsPostActions from '../actions/newspost.action';
import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
@Injectable()
export class NewsPostEffects {

    constructor(private action$: Actions, private newsPostService: HackerNewsService, private spinnerService: NgxSpinnerService){}

    GetNewsPosts$: Observable<Action> = createEffect(() =>
    this.action$.pipe(
      ofType(newsPostActions.getNewsPosts),
      map((action) => action),
      switchMap((payload) => {
        this.spinnerService.show();
        return this.newsPostService.getLatestPost(payload.pageNum).pipe(
          mergeMap((response: any) => [
            newsPostActions.getNewsPostsSuccess({response}),
          ]),
          catchError((error) => {
            return of(newsPostActions.getNewsPostsFailure({error}));
          })
        );
      })
  )
    );


  HidePost$: Observable<Action> = createEffect(() =>
    this.action$.pipe(
      ofType(newsPostActions.hidePost),
      map((action) => action),
      switchMap(({Id}) => {
        return this.newsPostService.hidePost(Id).pipe(
          mergeMap((response: any) => [
            newsPostActions.hidePostSuccess({response}),
          ]),
          catchError((error) => {
            return of(newsPostActions.getNewsPostsFailure({error}));
          })
        );
      })
  ));

  UpvotePost$: Observable<Action> = createEffect(() =>
    this.action$.pipe(
      ofType(newsPostActions.upVotePost),
      map((action) => action),
      switchMap(({Id}) => {
        return this.newsPostService.upVotePost(Id).pipe(
          mergeMap((response: any) => [
            newsPostActions.upVotePostSuccess({response}),
          ]),
          catchError((error) => {
            return of(newsPostActions.getNewsPostsFailure({error}));
          })
        );
      })
  ));

}


