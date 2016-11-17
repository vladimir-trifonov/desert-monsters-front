import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';

import { Dashboard } from './dashboard.component';
import { routing }       from './dashboard.routing';

import { Blog } from '../blog';
import { PostCreate } from '../post';
import { BlogService } from '../blog/blog.service';
import { PostCreateService } from '../post/post-create.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    routing
  ],
  declarations: [
    Blog,
    PostCreate,
    Dashboard
  ],
  providers: [
    BlogService,
    PostCreateService
  ]
})
export default class DashboardModule {}
