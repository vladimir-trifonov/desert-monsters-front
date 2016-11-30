import { Component, ViewEncapsulation } from '@angular/core';
import { AsyncPipe } from '@angular2/common';
import { AuthHttp } from 'angular2-jwt';
import { select } from 'ng2-redux';

import { AuthService } from '../auth/auth.service';
import { ForumCategoryActions } from '../../actions/forum-category.actions';
import { ActiveForumCategoryActions } from '../../actions/active-forum-category.actions';
import { DiscoveryService } from '../../common/discovery.service';

import { CreateForumCategory } from '../category';

@Component({
	selector: 'forum-category',
	encapsulation: ViewEncapsulation.None,
	styles: [require('./forum-category.scss')],
	template: require('./forum-category.html')
})
export class ForumCategory {
	@select('forumCategory') forumCategory$: any;
	@select('activeForumCategory') activeForumCategory$: any;
	
	private currentCat: any;

	constructor(private authHttp: AuthHttp, private activeForumCategoryActions: ActiveForumCategoryActions, private forumCategoryActions: ForumCategoryActions, private discoverService: DiscoveryService, private authService: AuthService) { }

	ngOnInit() {
		this.forumCategoryActions.getCategories();

		this.activeForumCategory$.subscribe((cat) => {
      this.currentCat = cat;
    });
	}

	setCategory(id) {
		this.activeForumCategoryActions.setActiveCategory(id);
	}

	expandMessage(message) {
		message.expanded = !message.expanded;
	}
}
