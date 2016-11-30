import { Component, ViewEncapsulation } from '@angular/core';
import { AsyncPipe } from '@angular2/common';
import { select } from 'ng2-redux';
import { Observable } from 'rxjs/Observable';

import { ForumPostActions } from '../../actions/forum-post.actions';

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

  constructor(private actions: ForumPostActions) { }

  ngOnInit() {
    this.activeForumCategory$.subscribe((cat) => {
      this.currentCat = cat;

      this.actions.getPostsFromDb(this.currentCat);
    });
  }

  expandMessage(message) {
    message.expanded = !message.expanded;
  }
}
