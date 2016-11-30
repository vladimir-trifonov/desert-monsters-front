import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import * as Redux from 'redux';
import { AuthHttp } from 'angular2-jwt';

import { IAppState } from '../store';
import { DiscoveryService } from '../common/discovery.service';

@Injectable()
export class ForumPostActions {
  static CREATE_FORUM_POST: string = 'CREATE_FORUM_POST';
  static UPDATE_FORUM_POST: string = 'UPDATE_FORUM_POST';
  static GET_FORUM_POSTS: string = 'GET_FORUM_POSTS';
  static DELETE_FORUM_POST: string = 'DELETE_FORUM_POST';
  static CREATE_FORUM_POST_COMMENT: string = 'CREATE_FORUM_POST_COMMENT';
  static UPDATE_FORUM_POST_COMMENT: string = 'UPDATE_FORUM_POST_COMMENT';
  static DELETE_FORUM_POST_COMMENT: string = 'DELETE_FORUM_POST_COMMENT';

  constructor(private authHttp: AuthHttp, private discoverService: DiscoveryService,
    private ngRedux: NgRedux<IAppState>) { }

  createForumPost(forumPost: Object): void {
    this.ngRedux.dispatch({ type: ForumPostActions.CREATE_FORUM_POST, forumPost });
  }

  updatePost(id, forumPost: Object): void {
    this.ngRedux.dispatch({ type: ForumPostActions.UPDATE_FORUM_POST, id, forumPost });
  }

  getPostsFromDb(category: any): void {
    if(category === null) {
      return this.ngRedux.dispatch({ type: ForumPostActions.GET_FORUM_POSTS, forumPosts: [] });
    }

     this.discoverService.getServiceUrl('desert-monsters-forum-service',
      (url) => {
        this.authHttp.get(`http://${url}/categories/${category._id}/posts`)
          .map(res => res.json())
          .subscribe(
          data => data && data.ok && data.posts && data.posts && this.ngRedux.dispatch({ type: ForumPostActions.GET_FORUM_POSTS, forumPosts: data.posts }),
          err => console.log(err)
          );
      },
      err => console.log(err)
    );
  }

  deletePost(id): void {
    this.ngRedux.dispatch({ type: ForumPostActions.DELETE_FORUM_POST, id });
  }

  createPostComment(postId: String, forumPostComment: Object): void {
    this.ngRedux.dispatch({ type: ForumPostActions.CREATE_FORUM_POST_COMMENT, postId, forumPostComment });
  }

  updatePostComment(postId: String, id: String, forumPostComment: Object): void {
    this.ngRedux.dispatch({ type: ForumPostActions.UPDATE_FORUM_POST_COMMENT, postId, id, forumPostComment });
  }

  deletePostComment(postId: String, id): void {
    this.ngRedux.dispatch({ type: ForumPostActions.DELETE_FORUM_POST_COMMENT, postId, id });
  }
}