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
      let updateIdx = state.findIndex((post: any) => post._id === action.id);
      state = [
        ...state.slice(0, updateIdx),
        action.forumPost,
        ...state.slice(updateIdx + 1)
      ];
      break;
    case ForumPostActions.DELETE_FORUM_POST:
      let delIdx = state.findIndex((post: any) => post._id === action.id);
      state = [
        ...state.slice(0, delIdx),
        ...state.slice(delIdx + 1)
      ];
      break;
    case ForumPostActions.CREATE_FORUM_POST_COMMENT:
      var postIdx = state.findIndex((post: any) => post._id === action.postId);
      var post = Object.assign({}, state[postIdx], {
        comments: [action.forumPostComment, ...state[postIdx].comments]
      });
      state = [
        ...state.slice(0, postIdx),
        post,
        ...state.slice(postIdx + 1)
      ];
      break;
    case ForumPostActions.UPDATE_FORUM_POST_COMMENT:
      var postIdx = state.findIndex((post: any) => post._id === action.postId);
      var commentIdx = state[postIdx].comments.findIndex((comment: any) => comment._id === action.id);
      var post = Object.assign({}, state[postIdx], {
        comments: [
          ...state[postIdx].comments.slice(0, commentIdx),
          action.forumPostComment,
          ...state[postIdx].comments.slice(commentIdx + 1)
        ]
      });
      state = [
        ...state.slice(0, postIdx),
        post,
        ...state.slice(postIdx + 1)
      ];
      break;
    case ForumPostActions.DELETE_FORUM_POST_COMMENT:
      var postIdx = state.findIndex((post: any) => post._id === action.postId);
      var commentIdx = state[postIdx].comments.findIndex((comment: any) => comment._id === action.id);
      var post = Object.assign({}, state[postIdx], {
        comments: [
          ...state[postIdx].comments.slice(0, commentIdx),
          ...state[postIdx].comments.slice(commentIdx + 1)
        ]
      });
      state = [
        ...state.slice(0, postIdx),
        post,
        ...state.slice(postIdx + 1)
      ];
      break;
  }
  return state;
};
