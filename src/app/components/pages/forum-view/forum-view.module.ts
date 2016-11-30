import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../../theme/nga.module';

import { ForumView } from './forum-view.component';
import { routing }       from './forum-view.routing';

import { ForumPost } from '../../forum';
import { ForumCategory } from '../../forum';
import { CreateForumPost } from '../../post';
import { CreateForumCategory } from '../../category';
import { ForumPostActions } from '../../../actions/forum-post.actions';
import { ForumCategoryActions } from '../../../actions/forum-category.actions';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    routing
  ],
  declarations: [
    ForumPost,
    ForumCategory,
    CreateForumPost,
    CreateForumCategory,
    ForumView
  ],
  providers: [
    ForumPostActions,
    ForumCategoryActions
  ]
})
export default class ForumViewModule {}
