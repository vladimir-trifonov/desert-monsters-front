import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import * as Redux from 'redux';
import { IAppState } from '../store';

@Injectable()
export class FeedActions {
  static CREATE_FEED_POST: string = 'CREATE_FEED_POST';
  static REPLACE_FEED_POST_BY_UUID: string = 'REPLACE_FEED_POST_BY_UUID';
  constructor (
    private ngRedux: NgRedux<IAppState>) {}

  createFeedPost(feedPost: Object): void {
    this.ngRedux.dispatch({ type: FeedActions.CREATE_FEED_POST, feedPost });
  }

  replaceFeedPostByUUID(tId, feedPost: Object): void {
    this.ngRedux.dispatch({ type: FeedActions.REPLACE_FEED_POST_BY_UUID, feedPost });
  }
}