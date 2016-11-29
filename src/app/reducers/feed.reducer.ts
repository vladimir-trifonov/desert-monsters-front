import { TFeed } from '../store';
import { Reducer } from 'redux';
import { FeedActions } from '../actions/feed.actions';

export const feedReducer: Reducer<TFeed> = (state: TFeed = [], action: any): TFeed => {
  switch (action.type) {
    case FeedActions.CREATE_FEED_POST:
      state = [action.feedPost, ...state];
      break;
    case FeedActions.GET_FEED_POSTS:
      state = action.feedPosts || state;
      break;
    case FeedActions.UPDATE_FEED_POST:
      let updateId = state.findIndex((post: any) => post.id === action.id);
      state = [
        ...state.slice(0, updateId),
        action.feedPost,
        ...state.slice(updateId + 1)
      ];
      break;
    case FeedActions.DELETE_FEED_POST:
      let delId = state.findIndex((post: any) => post.id === action.id);
      state = [
        ...state.slice(0, delId),
        ...state.slice(delId + 1)
      ];
      break;
  }
  return state;
};
