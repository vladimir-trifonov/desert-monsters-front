import { Component, ViewEncapsulation } from '@angular/core';
import { AsyncPipe } from '@angular2/common';
import { select } from 'ng2-redux';

import { BlogActions } from '../../actions/blog.actions';

@Component({
  selector: 'blog',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./blog.scss')],
  template: require('./blog.html')
})
export class Blog {
  @select('blog') blog$: any;

  constructor(private actions: BlogActions) { }

  ngOnInit() {
    this.actions.getPostsFromDb();
  }

  expandMessage(message) {
    message.expanded = !message.expanded;
  }
}
