import { IAppState } from '../store';
import { Reducer } from 'redux';
import { Action } from 'flux-standard-action';

export const feedReducer: Reducer<IAppState> = (state: IAppState = [], action: Action<IAppState>): IAppState => {
  return state;
};
