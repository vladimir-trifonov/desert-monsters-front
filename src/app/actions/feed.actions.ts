import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import * as Redux from 'redux';
import { AuthHttp } from 'angular2-jwt';

import { IAppState } from '../store';
import { DiscoveryService } from '../common/discovery.service';
import { AuthService } from '../components/auth/auth.service';

@Injectable()
export class FeedActions {
  static CREATE_FEED_POST: string = 'CREATE_FEED_POST';
  static UPDATE_FEED_POST: string = 'UPDATE_FEED_POST';
  static GET_FEED_POSTS: string = 'GET_FEED_POSTS';
  static DELETE_FEED_POST: string = 'DELETE_FEED_POST';
  
  constructor(private authService: AuthService, private authHttp: AuthHttp, private discoverService: DiscoveryService,
    private ngRedux: NgRedux<IAppState>) { }

  createFeedPost(feedPost: Object): void {
    this.ngRedux.dispatch({ type: FeedActions.CREATE_FEED_POST, feedPost });
  }

  updatePost(id: String, feedPost: Object): void {
    this.ngRedux.dispatch({ type: FeedActions.UPDATE_FEED_POST, id, feedPost });
  }

  getPostsFromDb(): void {
     this.discoverService.getServiceUrl('desert-monsters-wall-service',
      (url) => {
        this.authHttp.get(`http://${url}/users/${this.authService.getUserProfile().id}/posts`)
          .map(res => res.json())
          .subscribe(
          data => data && data.ok && data.posts && this.ngRedux.dispatch({ type: FeedActions.GET_FEED_POSTS, feedPosts: data.posts.map((post) => {
            post.content = post.content || {};
            return post;
          })}),
          err => console.log(err)
          );
      },
      err => console.log(err)
    );
  }

  deletePost(id: String): void {
    this.ngRedux.dispatch({ type: FeedActions.DELETE_FEED_POST, id });
  }
}