import { Component, ViewEncapsulation } from '@angular/core';
import { AsyncPipe } from '@angular2/common';
import { AuthHttp } from 'angular2-jwt';
import { select } from 'ng2-redux';

import { AuthService } from '../auth/auth.service';
import { FeedActions } from '../../actions/feed.actions';
import { DiscoveryService } from '../../common/discovery.service';

@Component({
  selector: 'feed',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./feed.scss')],
  template: require('./feed.html')
})
export class Feed {
  @select('feed') feed$: any;

  constructor(private authHttp: AuthHttp, private actions: FeedActions, private discoverService: DiscoveryService, private authService: AuthService) { }

  ngOnInit() {
    this.discoverService.getServiceUrl('desert-monsters-wall-service',
      (url) => {
        this.authHttp.get(`http://${url}/users/${this.authService.getUserProfile().id}/posts`)
          .map(res => res.json())
          .subscribe(
          data => data && data.ok && data.posts && data.posts.length && this.actions.getPosts(data.posts.map((post) => {
            post.content = post.content || {};
            return post;
          })),
          err => console.log(err)
          );
      },
      err => console.log(err)
    );
  }

  expandMessage(message) {
    message.expanded = !message.expanded;
  }
}
