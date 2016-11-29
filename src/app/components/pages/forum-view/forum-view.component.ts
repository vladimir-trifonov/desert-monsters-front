import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'forum-view',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./forum-view.scss')],
  template: require('./forum-view.html')
})
export class ForumView {

  constructor() {
  }

}
