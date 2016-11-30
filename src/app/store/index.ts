export type TFeed = Array<Object>;
export type TBlog = Array<Object>;
export type TForumPost = Array<Object>;
export type TForumCategory = Array<Object>;
export type TActiveForumCategory = Object;

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