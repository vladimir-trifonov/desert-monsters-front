import { Component, ViewEncapsulation } from '@angular/core';
import { AsyncPipe } from '@angular2/common';
import { AuthHttp } from 'angular2-jwt';
import { select } from 'ng2-redux';


import { AuthService } from '../auth/auth.service';
import { DiscoveryService } from '../../common/discovery.service';

@Component({
  selector: 'news',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./news.scss')],
  template: require('./news.html')
})
export class News {
  private posts: Array<Object>;
  
  constructor(private authHttp: AuthHttp, private discoverService: DiscoveryService, private authService: AuthService) { }

  ngOnInit() {
    this.discoverService.getServiceUrl('desert-monsters-blog-service',
      (url) => {
        this.authHttp.get(`http://${url}/posts/last`)
          .map(res => res.json())
          .subscribe(
          data => data && data.ok && data.posts && data.posts.length && this.setPosts(data.posts),
          err => console.log(err)
          );
      },
      err => console.log(err)
    );
  }

  setPosts(posts) {
    const loggedUserID = this.authService.getUserID();

    this.posts = posts.filter((post) => {
      return post.user.id !== loggedUserID;
    }).map((post) => {
      post.content = post.content || {};
      return post;
    });
  }

  expandPost(post) {
    post.expanded = !post.expanded;
  }
}
