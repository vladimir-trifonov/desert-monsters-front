import { Component, ViewEncapsulation } from '@angular/core';
import { AsyncPipe } from '@angular2/common';
import { AuthHttp } from 'angular2-jwt';
import { select } from 'ng2-redux';
import { Observable } from 'rxjs/Observable';

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
	@select('activeForumCategory') activeForumCategory$: Observable<any>;

  private currentCat: any;

  constructor(private authHttp: AuthHttp, private actions: ForumPostActions, private discoverService: DiscoveryService, private authService: AuthService) { }

  ngOnInit() {
    this.activeForumCategory$.subscribe((cat) => {
      this.currentCat = cat;

      this.actions.getPosts(this.currentCat);
    });
  }

  expandMessage(message) {
    message.expanded = !message.expanded;
  }
}
