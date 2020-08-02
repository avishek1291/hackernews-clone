import { createAction , props} from '@ngrx/store';


export const getNewsPosts =  createAction(
    '[news-posts] Get news posts'
);

export const getNewsPostsSuccess =  createAction(
    '[news-posts-success] Get news posts',
    props<{response: any}>()
);

export const hidePost =  createAction(
    '[news-posts-hide] Hide post',
    props<{Id: any}>()
);

export const getNewsPostsFailure =  createAction(
    '[news-posts-failure] Get news posts',
    props<{error: any}>()
);
