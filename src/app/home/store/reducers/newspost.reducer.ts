import { createReducer, on, Action } from '@ngrx/store';
import * as NewsPostActions from '../actions/newspost.action';
import { State } from '@ngrx/store';
const initialState = {
    newsPost: []
};
export const NewsPostFeatureKey =  'homeModuleStore';

export const NewsPostReducer = createReducer(initialState,
on(NewsPostActions.getNewsPostsSuccess, (state: any, action) => {
   return{
       ...state,
       newsPost: action.response ? formatData(action.response) : [],
       chartData: action.response ? formatChartData(action.response) : []
   };
}),
on(NewsPostActions.hidePostSuccess, (state: any, action) => {
    return{
        ...state,
        newsPost: action.response,
        chartData: action.response ? formatChartData(action.response) : []
    };
 }),
 on(NewsPostActions.upVotePostSuccess, (state: any, action) => {
    return{
        ...state,
        newsPost: action.response ? formatData(action.response) : [],
        chartData: action.response ? formatChartData(action.response) : []
    };
 })
);

function formatChartData(list: Array<any>){
    return list.filter(el => !el.hideElement).map(el => {
        return{
            // tslint:disable-next-line:radix
            x: parseInt(el.objectID),
            y: el.points
        };
    });
}
function formatData(list: Array<any>){
    return list.map(el => {
        return {
            ...el,
            shortUrl: extractUrl(el.url ? el.url : '')
        };
    });
}

function extractUrl(str: string){
const path = str.split( '/' );
return path[0] + '//' + path[2];
}
export function reducer(state: State<any> | undefined, action: Action) {
    return NewsPostReducer(state, action);
  }
