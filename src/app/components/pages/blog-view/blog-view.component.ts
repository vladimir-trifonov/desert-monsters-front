import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'blog-view',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./blog-view.scss')],
  template: require('./blog-view.html')
})
export class BlogView {

  constructor() {
  }

}
