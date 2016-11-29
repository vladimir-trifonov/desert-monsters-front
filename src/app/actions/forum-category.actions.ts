import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import * as Redux from 'redux';
import { IAppState } from '../store';

@Injectable()
export class ForumCategoryActions {
  static CREATE_FORUM_CATEGORY: string = 'CREATE_FORUM_CATEGORY';
  static UPDATE_FORUM_CATEGORY: string = 'UPDATE_FORUM_CATEGORY';
  static GET_FORUM_CATEGORIES: string = 'GET_FORUM_CATEGORIES';
  static DELETE_FORUM_CATEGORY: string = 'DELETE_FORUM_CATEGORY';
  constructor(
    private ngRedux: NgRedux<IAppState>) { }

  createForumCategory(forumCategory: Object): void {
    this.ngRedux.dispatch({ type: ForumCategoryActions.CREATE_FORUM_CATEGORY, forumCategory });
  }

  updateCategory(id, forumCategory: Object): void {
    this.ngRedux.dispatch({ type: ForumCategoryActions.UPDATE_FORUM_CATEGORY, id, forumCategory });
  }

  getCategorys(forumCategories: Array<Object>): void {
    this.ngRedux.dispatch({ type: ForumCategoryActions.GET_FORUM_CATEGORIES, forumCategories });
  }

  deleteCategory(id): void {
    this.ngRedux.dispatch({ type: ForumCategoryActions.DELETE_FORUM_CATEGORY, id });
  }
}