import {Component, ViewEncapsulation} from '@angular/core';
import {BaThemeConfigProvider} from '../../theme';

import {PostCreateService} from './post-create.service';

@Component({
  selector: 'post-create',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./post-create.scss')],
  template: require('./post-create.html')
})
export class PostCreate {
  
  public dashboardColors = this._baConfig.get().colors.dashboard;

  public newPostText:string = '';

  constructor(private _baConfig:BaThemeConfigProvider, private _todoService:PostCreateService) {
  }

  addPostItem() {
    
  }
}
