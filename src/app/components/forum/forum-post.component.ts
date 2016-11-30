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
  }

  expandMessage(message) {
    message.expanded = !message.expanded;
  }
}
