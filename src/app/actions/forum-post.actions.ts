import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import * as Redux from 'redux';
import { IAppState } from '../store';

@Injectable()
export class ForumPostActions {
  static CREATE_FORUM_POST: string = 'CREATE_FORUM_POST';
  static UPDATE_FORUM_POST: string = 'UPDATE_FORUM_POST';
  static GET_FORUM_POSTS: string = 'GET_FORUM_POSTS';
  static DELETE_FORUM_POST: string = 'DELETE_FORUM_POST';
  constructor(
    private ngRedux: NgRedux<IAppState>) { }

  createForumPost(forumPost: Object): void {
    this.ngRedux.dispatch({ type: ForumPostActions.CREATE_FORUM_POST, forumPost });
  }

  updatePost(id, forumPost: Object): void {
    this.ngRedux.dispatch({ type: ForumPostActions.UPDATE_FORUM_POST, id, forumPost });
  }

  getPosts(forumPosts: Array<Object>): void {
    this.ngRedux.dispatch({ type: ForumPostActions.GET_FORUM_POSTS, forumPosts });
  }

  deletePost(id): void {
    this.ngRedux.dispatch({ type: ForumPostActions.DELETE_FORUM_POST, id });
  }
}