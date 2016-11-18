export type TFeed = Array<Object>;

export interface IAppState {
  feed?: TFeed;
};

export const RootState: IAppState = {
  feed: []
};