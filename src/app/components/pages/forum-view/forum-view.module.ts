import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../../theme/nga.module';

import { ForumView } from './forum-view.component';
import { routing }       from './forum-view.routing';

import { ForumPost } from '../../forum';
import { CreateForumPost } from '../../post';
import { ForumPostActions } from '../../../actions/forum-post.actions';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    routing
  ],
  declarations: [
    ForumPost,
    CreateForumPost,
    ForumView
  ],
  providers: [
    ForumPostActions
  ]
})
export default class ForumViewModule {}
