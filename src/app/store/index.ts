export type TFeed = Array<Object>;
export type TBlog = Array<Object>;
export type TForumPost = Array<Object>;
export type TForumCategory = Array<Object>;

export interface IAppState {
  feed?: TFeed;
  blog?: TBlog;
  forumPost?: TForumPost,
  forumCategory?: TForumCategory
};

export const RootState: IAppState = {
  feed: [],
  blog: [],
  forumPost: [],
  forumCategory: []
};