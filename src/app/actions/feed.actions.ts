import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import * as Redux from 'redux';
import { IAppState } from '../store';

@Injectable()
export class FeedActions {
  static CREATE_FEED_POST: string = 'CREATE_FEED_POST';
  static UPDATE_FEED_POST: string = 'UPDATE_FEED_POST';
  static GET_FEED_POSTS: string = 'GET_FEED_POSTS';
  static DELETE_FEED_POST: string = 'DELETE_FEED_POST';
  constructor (
    private ngRedux: NgRedux<IAppState>) {}

  createFeedPost(feedPost: Object): void {
    this.ngRedux.dispatch({ type: FeedActions.CREATE_FEED_POST, feedPost });
  }

  updatePost(id, feedPost: Object): void {
    this.ngRedux.dispatch({ type: FeedActions.UPDATE_FEED_POST, feedPost });
  }

  getPosts(blogPosts: Array<Object>): void {
    this.ngRedux.dispatch({ type: FeedActions.GET_FEED_POSTS, blogPosts });
  }

  deletePost(id): void {
    this.ngRedux.dispatch({ type: FeedActions.DELETE_FEED_POST, id });
  }
}