import { Component, ViewEncapsulation } from '@angular/core';
import { BaThemeConfigProvider } from '../../theme';
import { AuthHttp } from 'angular2-jwt';
import { Observable } from 'rxjs/Observable';
import { NgRedux, select } from 'ng2-redux';

import { AuthService } from '../auth';
import { IAppState } from '../../store';
import { ForumPostActions } from '../../actions/forum-post.actions';
var uuid = require('node-uuid');

import { DiscoveryService } from '../../common/discovery.service';

@Component({
  selector: 'create-forum-post',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./create-forum-post.scss')],
  template: require('./create-forum-post.html')
})
export class CreateForumPost {
  @select('activeForumCategory') activeForumCategory$: Observable<any>;

  public dashboardColors = this._baConfig.get().colors.dashboard;
  public newPostText: string = '';
  private busy = false;
  private currentCat: any;

  constructor(private authService: AuthService, private _baConfig: BaThemeConfigProvider, private actions: ForumPostActions, private authHttp: AuthHttp, private discoverService: DiscoveryService) { }

  createForumPost() {
    if (this.busy || !this.currentCat) {
      return;
    }

    const _self = this;
    const tId = uuid.v1();

    // Set state saving
    this.busy = true;

    // Add the post on the forum with a temporary ID
    this.actions.createForumPost({
      _id: tId,
      createdAt: new Date(),
      content: {
        title: this.newPostText,
        type: 'forum:text'
      },
      user: {
        name: this.authService.getUserName()
      }
    });

    // When the saved post is returned from the db update the post data
    this.discoverService.getServiceUrl('desert-monsters-forum-service',
      (url) => {
        this.authHttp.post(`http://${url}/categories/${this.currentCat._id}/posts`, {
          title: _self.newPostText,
          type: 'forum:text'
        })
          .map(res => res.json())
          .subscribe(
          data => {
            _self.busy = false;

            data && data.ok && !!data.post && _self.actions.updatePost(tId, data.post);

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

  ngOnInit() {
    this.activeForumCategory$.subscribe((cat) => {
      this.currentCat = cat;
    });
  }
}
