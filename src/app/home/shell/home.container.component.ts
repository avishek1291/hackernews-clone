import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { HackerNewsService } from '../services/hacker-news.service';
import { State, select, Store } from '@ngrx/store';
import * as NewsSelector from '../store/index';
import * as NewsPostActions from '../store/actions/newspost.action';
@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeContainerComponent implements OnInit {
  newsList: any;
  newsListPosts$: Observable<any>;
  chartData$: Observable<any>;
  loaderStatus$: Observable<any>;
  Id: any;
  lineChartData: any;
  constructor(private state: State<any>, private store: Store) {}

  ngOnInit() {
    this.store.dispatch(NewsPostActions.getNewsPosts({  pageNum: 0}));
    this.store.dispatch(NewsPostActions.showLoader({show: true}));

    this.newsListPosts$ = this.state.pipe(select(NewsSelector.getNewsPosts));

    this.loaderStatus$ = this.state.pipe(select(NewsSelector.loaderSatus));

    this.chartData$ = this.state.pipe(select(NewsSelector.getChartData));
    this.chartData$.subscribe((res) => {
      if (res) {
        this.lineChartData = res;
      }
    });
  }

  hidePost(Id) {
    console.log('hide at shell', Id);
    this.store.dispatch(NewsPostActions.hidePost({ Id }));
  }

  upVote(Id) {
    console.log('upvote at shell', Id);
    this.store.dispatch(NewsPostActions.upVotePost({ Id }));
  }

  previousPageClicked(pageCount){
    this.store.dispatch(NewsPostActions.getNewsPosts({pageNum: pageCount}));
    localStorage.set('pageCount', JSON.stringify(pageCount));
    this.store.dispatch(NewsPostActions.showLoader({show: true}));

  }

  nexPageClick(pageCount){
    this.store.dispatch(NewsPostActions.getNewsPosts({pageNum: pageCount}));
    localStorage.set('pageCount', JSON.stringify(pageCount));
    this.store.dispatch(NewsPostActions.showLoader({show: true}));
  }
}
