import { Component, ViewEncapsulation } from '@angular/core';
import { BaThemeConfigProvider } from '../../theme';
import { AuthHttp } from 'angular2-jwt';

import { NgRedux, select } from 'ng2-redux';

import { IAppState } from '../../store';
import { ForumCategoryActions } from '../../actions/forum-category.actions';
var uuid = require('node-uuid');

import { DiscoveryService } from '../../common/discovery.service';

@Component({
  selector: 'create-forum-category',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./create-forum-category.scss')],
  template: require('./create-forum-category.html')
})
export class CreateForumCategory {

  public dashboardColors = this._baConfig.get().colors.dashboard;
  public newCategoryName: string = '';
  private busy = false;

  constructor(private _baConfig: BaThemeConfigProvider, private actions: ForumCategoryActions, private authHttp: AuthHttp, private discoverService: DiscoveryService) { }

  createForumCategory() {
    if (this.busy) {
      return;
    }

    const _self = this;
    const tId = uuid.v1();

    // Set state saving
    this.busy = true;
    
    // Add the category on the forum with a temporary ID
    this.actions.createForumCategory({
      id: tId,
      createdAt: new Date(),
      name: this.newCategoryName
    });

    // When the saved category is returned from the db update the category data
    this.discoverService.getServiceUrl('desert-monsters-forum-service',
      (url) => {
        this.authHttp.post(`http://${url}/categories`, {
          name: this.newCategoryName
        })
          .map(res => res.json())
          .subscribe(
          data => {
            _self.busy = false;
            
            data && data.ok && !!data.category && _self.actions.updateCategory(tId, data.category);

            // Clear the input field
            this.newCategoryName = '';
          },
          err => {
            _self.busy = false;
            _self.actions.deleteCategory(tId);
            console.log(err);
          });
      },
      err => {
        _self.busy = false;
        console.log(err)
      }
    );
  }
}
