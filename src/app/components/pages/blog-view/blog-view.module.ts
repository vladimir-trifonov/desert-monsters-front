import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../../theme/nga.module';

import { BlogView } from './blog-view.component';
import { routing }       from './blog-view.routing';

import { Blog } from '../../blog';
import { CreateBlogPost } from '../../post';
import { BlogActions } from '../../../actions/blog.actions';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    routing
  ],
  declarations: [
    Blog,
    CreateBlogPost,
    BlogView
  ],
  providers: [
    BlogActions
  ]
})
export default class BlogViewModule {}
