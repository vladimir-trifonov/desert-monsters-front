import { Component, ViewEncapsulation, Input } from '@angular/core';
import { BaThemeConfigProvider } from '../../theme';
import { AuthHttp } from 'angular2-jwt';

import { NgRedux, select } from 'ng2-redux';

import { IAppState } from '../../store';
import { ForumPostActions } from '../../actions/forum-post.actions';
import { AuthService } from '../auth';
var uuid = require('node-uuid');

import { DiscoveryService } from '../../common/discovery.service';

@Component({
  selector: 'create-forum-post-comment',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./create-forum-post-comment.scss')],
  template: require('./create-forum-post-comment.html')
})
export class CreateForumPostComment {

  public dashboardColors = this._baConfig.get().colors.dashboard;
  public newCommentText: string = '';
  private busy = false;

  @Input() postId = null;
  @Input() categoryId = null;

  constructor(private authService: AuthService, private _baConfig: BaThemeConfigProvider, private actions: ForumPostActions, private authHttp: AuthHttp, private discoverService: DiscoveryService) { }

  createForumPostComment() {
    if (this.busy) {
      return;
    }

    const _self = this;
    const tId = uuid.v1();

    // Set state saving
    this.busy = true;

    // Add the category on the forum with a temporary ID
    this.actions.createPostComment(this.postId, {
      _id: tId,
      createdAt: new Date(),
      content: {
        text: this.newCommentText
      },
      user: {
        name: this.authService.getUserName()
      }
    });

    // When the saved category is returned from the db update the category data
    this.discoverService.getServiceUrl('desert-monsters-forum-service',
      (url) => {
        this.authHttp.post(`http://${url}/categories/${this.categoryId}/posts/${this.postId}/comments`, {
          text: this.newCommentText
        })
          .map(res => res.json())
          .subscribe(
          data => {
            _self.busy = false;

            data && data.ok && !!data.comment && _self.actions.updatePostComment(this.postId, tId, data.comment);

            // Clear the input field
            this.newCommentText = '';
          },
          err => {
            _self.busy = false;
            _self.actions.deletePostComment(this.postId, tId);
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
