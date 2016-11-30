import { TForumCategory } from '../store';
import { Reducer } from 'redux';
import { ForumCategoryActions } from '../actions/forum-category.actions';

export const forumCategoryReducer: Reducer<TForumCategory> = (state: TForumCategory = [], action: any): TForumCategory => {
  switch (action.type) {
    case ForumCategoryActions.CREATE_FORUM_CATEGORY:
      state = [action.forumCategory, ...state];
      break;
    case ForumCategoryActions.GET_FORUM_CATEGORIES:
      state = action.forumCategories || state;
      break;
    case ForumCategoryActions.UPDATE_FORUM_CATEGORY:
      let updateIdx = state.findIndex((category: any) => category._id === action.id);
      state = [
        ...state.slice(0, updateIdx),
        action.forumCategory,
        ...state.slice(updateIdx + 1)
      ];
      break;
    case ForumCategoryActions.DELETE_FORUM_CATEGORY:
      let delIdx = state.findIndex((category: any) => category._id === action.id);
      state = [
        ...state.slice(0, delIdx),
        ...state.slice(delIdx + 1)
      ];
      break;
  }
  return state;
};
