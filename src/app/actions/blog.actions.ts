import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import * as Redux from 'redux';
import { AuthHttp } from 'angular2-jwt';

import { IAppState } from '../store';
import { DiscoveryService } from '../common/discovery.service';
import { AuthService } from '../components/auth/auth.service';

@Injectable()
export class BlogActions {
  static CREATE_BLOG_POST: string = 'CREATE_BLOG_POST';
  static UPDATE_BLOG_POST: string = 'UPDATE_BLOG_POST';
  static GET_BLOG_POSTS: string = 'GET_BLOG_POSTS';
  static DELETE_BLOG_POST: string = 'DELETE_BLOG_POST';

  constructor(private authService: AuthService, private authHttp: AuthHttp, private discoverService: DiscoveryService,
    private ngRedux: NgRedux<IAppState>) { }

  createBlogPost(blogPost: Object): void {
    this.ngRedux.dispatch({ type: BlogActions.CREATE_BLOG_POST, blogPost });
  }

  updatePost(id: String, blogPost: Object): void {
    this.ngRedux.dispatch({ type: BlogActions.UPDATE_BLOG_POST, id, blogPost });
  }

  getPostsFromDb(): void {
    this.discoverService.getServiceUrl('desert-monsters-blog-service',
      (url) => {
        this.authHttp.get(`http://${url}/users/${this.authService.getUserProfile().id}/posts`)
          .map(res => res.json())
          .subscribe(
          data => data && data.ok && data.posts && this.ngRedux.dispatch({
            type: BlogActions.GET_BLOG_POSTS, blogPosts: data.posts.map((post) => {
              post.content = post.content || {};
              return post;
            })
          }),
          err => console.log(err)
          );
      },
      err => console.log(err)
    );
  }

  deletePost(id: String): void {
    this.ngRedux.dispatch({ type: BlogActions.DELETE_BLOG_POST, id });
  }
}