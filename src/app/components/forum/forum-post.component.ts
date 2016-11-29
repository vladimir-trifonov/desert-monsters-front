import { Component, ViewEncapsulation } from '@angular/core';
import { AsyncPipe } from '@angular2/common';
import { AuthHttp } from 'angular2-jwt';
import { select } from 'ng2-redux';

import { AuthService } from '../auth/auth.service';
import { ForumPostActions } from '../../actions/forum-post.actions';
import { DiscoveryService } from '../../common/discovery.service';

@Component({
  selector: 'forum',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./forum-post.scss')],
  template: require('./forum-post.html')
})
export class ForumPost {
  @select('forumPost') forumPost$: any;

  constructor(private authHttp: AuthHttp, private actions: ForumPostActions, private discoverService: DiscoveryService, private authService: AuthService) { }

  ngOnInit() {
    // this.discoverService.getServiceUrl('desert-monsters-forum-service',
    //   (url) => {
    //     this.authHttp.get(`http://${url}/users/${this.authService.getUserProfile().id}/posts`)
    //       .map(res => res.json())
    //       .subscribe(
    //       data => data && data.ok && data.posts && data.posts.length && this.actions.getPosts(data.posts),
    //       err => console.log(err)
    //       );
    //   },
    //   err => console.log(err)
    // );
  }

  expandMessage(message) {
    message.expanded = !message.expanded;
  }
}
