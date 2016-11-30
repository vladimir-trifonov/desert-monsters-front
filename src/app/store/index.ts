export type TFeed = Array<any>;
export type TBlog = Array<any>;
export type TForumPost = Array<any>;
export type TForumCategory = Array<any>;
export type TActiveForumCategory = any;

export interface IAppState {
  feed?: TFeed;
  blog?: TBlog;
  forumPost?: TForumPost,
  forumCategory?: TForumCategory,
  activeForumCategory: TActiveForumCategory
};

export const RootState: IAppState = {
  feed: [],
  blog: [],
  forumPost: [],
  forumCategory: [],
  activeForumCategory: null
};