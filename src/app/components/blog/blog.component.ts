import {Component, ViewEncapsulation} from '@angular/core';

import {BlogService} from './blog.service';

@Component({
  selector: 'blog',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./blog.scss')],
  template: require('./blog.html')
})
export class Blog {

  public blog:Array<Object>;

  constructor(private _blogService:BlogService) {
  }

  ngOnInit() {
    this._loadBlog();
  }

  expandMessage (message){
    message.expanded = !message.expanded;
  }

  private _loadBlog() {
    this.blog = this._blogService.getData();
  }
}
