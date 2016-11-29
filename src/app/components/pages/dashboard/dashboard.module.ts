import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../../theme/nga.module';

import { Dashboard } from './dashboard.component';
import { routing }       from './dashboard.routing';

import { News } from '../../news';
import { Feed } from '../../feed';
import { CreateFeedPost } from '../../post';
import { FeedActions } from '../../../actions/feed.actions';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    routing
  ],
  declarations: [
    News,
    Feed,
    CreateFeedPost,
    Dashboard
  ],
  providers: [
    FeedActions
  ]
})
export default class DashboardModule {}
