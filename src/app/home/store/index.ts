import { NewsPostFeatureKey, reducer} from '../store/reducers/newspost.reducer';

import { createFeatureSelector, createSelector, ActionReducerMap } from '@ngrx/store';

export const NewsPostreducers: ActionReducerMap<any> = {
    NewsReducer: reducer
  };
const featureState =  createFeatureSelector(NewsPostFeatureKey);


export const getNewsPosts = createSelector(featureState, (state: any): any => {
 return state.NewsReducer.newsPost;
});

export const getChartData = createSelector(featureState, (state: any): any => {
  return state.NewsReducer.chartData;
 });
