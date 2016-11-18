import { Component, ViewEncapsulation } from '@angular/core';
import { BaThemeConfigProvider } from '../../theme';

import { NgRedux, select } from 'ng2-redux';

import { IAppState } from '../../store';
import { FeedActions } from '../../actions/feedActions';

@Component({
  selector: 'post-create',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./post-create.scss')],
  template: require('./post-create.html')
})
export class PostCreate {

  public dashboardColors = this._baConfig.get().colors.dashboard;
  public newPostText: string = '';

  constructor(private _baConfig: BaThemeConfigProvider, private actions: FeedActions) { }

  createFeedPost() {
    this.actions.createFeedPost({
      type: 'video-message',
      author: 'Andrey',
      surname: 'Hrabouski',
      header: 'Added new video',
      text: '"Vader and Me"',
      preview: 'app/feed/vader-and-me-preview.png',
      link: 'https://www.youtube.com/watch?v=IfcpzBbbamk',
      time: 'Today 9:30 pm',
      ago: '3 hrs ago',
      expanded: false,
    });
  }
}
