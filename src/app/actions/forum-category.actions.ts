import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import * as Redux from 'redux';
import { AuthHttp } from 'angular2-jwt';

import { IAppState } from '../store';
import { DiscoveryService } from '../common/discovery.service';

@Injectable()
export class ForumCategoryActions {
  static CREATE_FORUM_CATEGORY: string = 'CREATE_FORUM_CATEGORY';
  static UPDATE_FORUM_CATEGORY: string = 'UPDATE_FORUM_CATEGORY';
  static GET_FORUM_CATEGORIES: string = 'GET_FORUM_CATEGORIES';
  static DELETE_FORUM_CATEGORY: string = 'DELETE_FORUM_CATEGORY';
  
  constructor(private authHttp: AuthHttp, private discoverService: DiscoveryService,
    private ngRedux: NgRedux<IAppState>) { }

  createForumCategory(forumCategory: Object): void {
    this.ngRedux.dispatch({ type: ForumCategoryActions.CREATE_FORUM_CATEGORY, forumCategory });
  }

  updateCategory(id: String, forumCategory: Object): void {
    this.ngRedux.dispatch({ type: ForumCategoryActions.UPDATE_FORUM_CATEGORY, id, forumCategory });
  }

  getCategoriesFromDb(): void {
    this.discoverService.getServiceUrl('desert-monsters-forum-service',
      (url) => {
        this.authHttp.get(`http://${url}/categories`)
          .map(res => res.json())
          .subscribe(
          data => data && data.ok && data.categories && this.ngRedux.dispatch({ type: ForumCategoryActions.GET_FORUM_CATEGORIES, forumCategories: data.categories }),
          err => console.log(err)
          );
      },
      err => console.log(err)
    );
  }

  deleteCategory(id: String): void {
    this.ngRedux.dispatch({ type: ForumCategoryActions.DELETE_FORUM_CATEGORY, id });
  }
}