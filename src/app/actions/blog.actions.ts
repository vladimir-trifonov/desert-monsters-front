import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import * as Redux from 'redux';
import { IAppState } from '../store';

@Injectable()
export class BlogActions {
  static CREATE_BLOG_POST: string = 'CREATE_BLOG_POST';
  static UPDATE_BLOG_POST: string = 'UPDATE_BLOG_POST';
  static GET_BLOG_POSTS: string = 'GET_BLOG_POSTS';
  static DELETE_BLOG_POST: string = 'DELETE_BLOG_POST';
  constructor(
    private ngRedux: NgRedux<IAppState>) { }

  createBlogPost(blogPost: Object): void {
    this.ngRedux.dispatch({ type: BlogActions.CREATE_BLOG_POST, blogPost });
  }

  updatePost(id, blogPost: Object): void {
    this.ngRedux.dispatch({ type: BlogActions.UPDATE_BLOG_POST, blogPost });
  }

  getPosts(blogPosts: Array<Object>): void {
    this.ngRedux.dispatch({ type: BlogActions.GET_BLOG_POSTS, blogPosts });
  }

  deletePost(id): void {
    this.ngRedux.dispatch({ type: BlogActions.DELETE_BLOG_POST, id });
  }
}