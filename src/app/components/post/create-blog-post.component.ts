import { Component, ViewEncapsulation } from '@angular/core';
import { BaThemeConfigProvider } from '../../theme';
import { AuthHttp } from 'angular2-jwt';

import { NgRedux, select } from 'ng2-redux';

import { IAppState } from '../../store';
import { BlogActions } from '../../actions/blog.actions';
var uuid = require('node-uuid');

import { DiscoveryService } from '../../common/discovery.service';

@Component({
  selector: 'create-blog-post',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./create-blog-post.scss')],
  template: require('./create-blog-post.html')
})
export class CreateBlogPost {

  public dashboardColors = this._baConfig.get().colors.dashboard;
  public newPostText: string = '';
  private busy = false;

  constructor(private _baConfig: BaThemeConfigProvider, private actions: BlogActions, private authHttp: AuthHttp, private discoverService: DiscoveryService) { }

  createBlogPost() {
    if (this.busy) {
      return;
    }

    const _self = this;
    const tId = uuid.v1();

    // Set state saving
    this.busy = true;

    // Add the post on the blog with a temporary ID
    this.actions.createBlogPost({
      id: tId,
      content: {
        text: this.newPostText,
        type: 'blog:text'
      }
    });

    // When the saved post is returned from the db update the post data
    this.discoverService.getServiceUrl('desert-monsters-blog-service',
      (url) => {
        this.authHttp.post(`http://${url}/posts`, {
          text: _self.newPostText,
          type: 'blog:text'
        })
          .map(res => res.json())
          .subscribe(
          data => {
            _self.busy = false;
            data && data.ok && _self.actions.updatePost(tId, data);

            // Clear the input field
            this.newPostText = '';
          },
          err => {
            _self.busy = false;
            _self.actions.deletePost(tId);
            console.log(err);
          });
      },
      err => {
        _self.busy = false;
        console.log(err)
      }
    );
  }
}
