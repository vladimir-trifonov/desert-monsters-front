import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../../theme/nga.module';

import { Dashboard } from './dashboard.component';
import { routing }       from './dashboard.routing';

import { Feed } from '../../feed';
import { PostCreate } from '../../post';
import { FeedActions } from '../../../actions/feedActions';

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
    FeedActions
  ]
})
export default class DashboardModule {}