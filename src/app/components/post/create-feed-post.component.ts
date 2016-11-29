import { Component, ViewEncapsulation } from '@angular/core';
import { BaThemeConfigProvider } from '../../theme';
import { AuthHttp } from 'angular2-jwt';

import { NgRedux, select } from 'ng2-redux';

import { IAppState } from '../../store';
import { FeedActions } from '../../actions/feed.actions';
var uuid = require('node-uuid');

import { DiscoveryService } from '../../common/discovery.service';

@Component({
  selector: 'create-feed-post',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./create-feed-post.scss')],
  template: require('./create-feed-post.html')
})
export class CreateFeedPost {

  public dashboardColors = this._baConfig.get().colors.dashboard;
  public newPostText: string = '';
  private busy = false;

  constructor(private _baConfig: BaThemeConfigProvider, private actions: FeedActions, private authHttp: AuthHttp, private discoverService: DiscoveryService) { }

  createFeedPost() {
    if (this.busy) {
      return;
    }

    const _self = this;
    const tId = uuid.v1();

    // Set state saving
    this.busy = true;
    
    // Add the post on the feed with a temporary ID
    this.actions.createFeedPost({
      id: tId,
      createdAt: new Date(),
      content: {
        text: this.newPostText,
        type: 'feed:text'
      }
    });

    // When the saved post is returned from the db update the post data
    this.discoverService.getServiceUrl('desert-monsters-wall-service',
      (url) => {
        this.authHttp.post(`http://${url}/posts`, {
          text: _self.newPostText,
          type: 'feed:text'
        })
          .map(res => res.json())
          .subscribe(
          data => {
            _self.busy = false;
            data && data.ok && data.post && _self.actions.updatePost(tId, data.post);

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
