import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import * as Redux from 'redux';
import { IAppState } from '../store';

@Injectable()
export class FeedActions {
  static CREATE_FEED_POST: string = 'CREATE_FEED_POST';
  constructor (
    private ngRedux: NgRedux<IAppState>) {}

  // Basic action
  createFeedPost(feedPost: Object): void {
    this.ngRedux.dispatch({ type: FeedActions.CREATE_FEED_POST, feedPost });
  }
}