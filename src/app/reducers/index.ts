import { combineReducers } from 'redux';
import { feedReducer } from './feed.reducer';
import { IAppState } from '../store'

export const rootReducer = combineReducers<IAppState>({
  feed: feedReducer
});