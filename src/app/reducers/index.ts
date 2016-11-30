import { combineReducers } from 'redux';
import { feedReducer } from './feed.reducer';
import { blogReducer } from './blog.reducer';
import { forumPostReducer } from './forum-post.reducer';
import { forumCategoryReducer } from './forum-category.reducer';
import { activeForumCategoryReducer } from './active-forum-category.reducer';
import { IAppState } from '../store'

export const rootReducer = combineReducers<IAppState>({
  feed: feedReducer,
  blog: blogReducer,
  forumPost: forumPostReducer,
  forumCategory: forumCategoryReducer,
  activeForumCategory: activeForumCategoryReducer
});