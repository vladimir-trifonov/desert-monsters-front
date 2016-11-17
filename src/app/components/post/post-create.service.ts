import {Injectable} from '@angular/core';

@Injectable()
export class PostCreateService {

  private _postsList = [];

  getPostsList() {
    return this._postsList;
  }
}
