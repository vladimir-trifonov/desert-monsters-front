export type TFeed = Array<Object>;
export type TBlog = Array<Object>;

export interface IAppState {
  feed?: TFeed;
  blog?: TBlog;
};

export const RootState: IAppState = {
  feed: [],
  blog: []
};