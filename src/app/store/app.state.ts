import { ActionReducerMap } from '@ngrx/store';
import { reducer } from '../home/store/reducers/newspost.reducer';
export const reducers: ActionReducerMap<any> = {
    newsState: reducer,
  };
