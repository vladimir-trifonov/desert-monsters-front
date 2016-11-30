import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import * as Redux from 'redux';
import { IAppState } from '../store';

@Injectable()
export class ActiveForumCategoryActions {
  static SET_ACTIVE_FORUM_CATEGORY: string = 'SET_ACTIVE_FORUM_CATEGORY';
  
  constructor(
    private ngRedux: NgRedux<IAppState>) { }

  setActiveCategory(id: String): void {
		const index = this.ngRedux.getState().forumCategory.findIndex((category: any) => category._id === id);
    this.ngRedux.dispatch({ type: ActiveForumCategoryActions.SET_ACTIVE_FORUM_CATEGORY, category: this.ngRedux.getState().forumCategory[index] });
  }
}