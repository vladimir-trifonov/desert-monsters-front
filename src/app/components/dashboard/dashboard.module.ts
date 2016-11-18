import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';

import { Dashboard } from './dashboard.component';
import { routing }       from './dashboard.routing';

import { Feed } from '../feed';
import { PostCreate } from '../post';
import { FeedService } from '../feed/feed.service';
import { PostCreateService } from '../post/post-create.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    routing
  ],
  declarations: [
    Feed,
    PostCreate,
    Dashboard
  ],
  providers: [
    FeedService,
    PostCreateService
  ]
})
export default class DashboardModule {}
