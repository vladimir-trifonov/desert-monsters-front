import { TForumPost } from '../store';
import { Reducer } from 'redux';
import { ForumPostActions } from '../actions/forum-post.actions';

export const forumPostReducer: Reducer<TForumPost> = (state: TForumPost = [], action: any): TForumPost => {
  switch (action.type) {
    case ForumPostActions.CREATE_FORUM_POST:
      state = [action.forumPost, ...state];
      break;
    case ForumPostActions.GET_FORUM_POSTS:
      state = action.forumPosts || state;
      break;
    case ForumPostActions.UPDATE_FORUM_POST:
      let updateId = state.findIndex((post: any) => post.id === action.id);
      state = [
        ...state.slice(0, updateId),
        action.forumPost,
        ...state.slice(updateId + 1)
      ];
      break;
    case ForumPostActions.DELETE_FORUM_POST:
      let delId = state.findIndex((post: any) => post.id === action.id);
      state = [
        ...state.slice(0, delId),
        ...state.slice(delId + 1)
      ];
      break;
  }
  return state;
};
