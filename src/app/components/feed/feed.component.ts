import { Component, ViewEncapsulation } from '@angular/core';
import { AsyncPipe } from '@angular2/common';
import { select } from 'ng2-redux';

import { FeedActions } from '../../actions/feed.actions';

@Component({
  selector: 'feed',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./feed.scss')],
  template: require('./feed.html')
})
export class Feed {
  @select('feed') feed$: any;

  constructor(private actions: FeedActions) { }

  ngOnInit() {
    this.actions.getPostsFromDb();
  }

  expandMessage(message) {
    message.expanded = !message.expanded;
  }
}
