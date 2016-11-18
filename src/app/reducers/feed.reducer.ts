import { TFeed } from '../store';
import { Reducer } from 'redux';
import { FeedActions } from '../actions/feedActions';

export const feedReducer: Reducer<TFeed> = (state: TFeed = [], action: any): TFeed => {
  switch (action.type) {
    case FeedActions.CREATE_FEED_POST: {
      state = [action.feedPost, ...state];
    }
  }
  return state;
};
