import { TBlog } from '../store';
import { Reducer } from 'redux';
import { BlogActions } from '../actions/blog.actions';

export const blogReducer: Reducer<TBlog> = (state: TBlog = [], action: any): TBlog => {
  switch (action.type) {
    case BlogActions.CREATE_BLOG_POST:
      state = [action.blogPost, ...state];
      break;
    case BlogActions.GET_BLOG_POSTS:
      state = action.blogPosts || state;
      break;
    case BlogActions.UPDATE_BLOG_POST:
      let updateIdx = state.findIndex((post: any) => post._id === action.id);
      state = [
        ...state.slice(0, updateIdx),
        action.blogPost,
        ...state.slice(updateIdx + 1)
      ];
      break;
    case BlogActions.DELETE_BLOG_POST:
      let delIdx = state.findIndex((post: any) => post._id === action.id);
      state = [
        ...state.slice(0, delIdx),
        ...state.slice(delIdx + 1)
      ];
      break;
  }
  return state;
};
