import { TActiveForumCategory } from '../store';
import { Reducer } from 'redux';
import { ActiveForumCategoryActions } from '../actions/active-forum-category.actions';

export const activeForumCategoryReducer: Reducer<TActiveForumCategory> = (state: TActiveForumCategory = null, action: any): TActiveForumCategory => {
  switch (action.type) {
    case ActiveForumCategoryActions.SET_ACTIVE_FORUM_CATEGORY:
      state = action.category;
      break;
  }
  return state;
};
