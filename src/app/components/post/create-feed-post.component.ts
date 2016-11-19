import { Component, ViewEncapsulation } from '@angular/core';
import { BaThemeConfigProvider } from '../../theme';
import { Http } from '@angular/http';

import { NgRedux, select } from 'ng2-redux';

import { IAppState } from '../../store';
import { FeedActions } from '../../actions/feedActions';
var uuid = require('node-uuid');

@Component({
  selector: 'create-feed-post',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./create-feed-post.scss')],
  template: require('./create-feed-post.html')
})
export class CreateFeedPost {

  public dashboardColors = this._baConfig.get().colors.dashboard;
  public newPostText: string = '';

  constructor(private _baConfig: BaThemeConfigProvider, private actions: FeedActions, private http: Http) { }

  createFeedPost() {
    const tId = uuid.v1();
    // Add the post on the feed with a temporary ID
    this.actions.createFeedPost({
      id: uuid,
      type: 'text-message',
      text: this.newPostText
    });

    // When the saved post is returned from the db update the post data
    this.http.post(`https://localhost:4000/posts`, {
      type: 'blog-post',
      text: this.newPostText
    })
      .map(res => res.json())
      .subscribe(
      data => data && data.ok && this.actions.updatePost(tId, data),
      err => console.log(err)
      );
    
    // Clear the input field
    this.newPostText = '';
  }

  updateFeedPost() {

  }
}
