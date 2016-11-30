import { Component, ViewEncapsulation } from '@angular/core';
import { AsyncPipe } from '@angular2/common';
import { AuthHttp } from 'angular2-jwt';
import { select } from 'ng2-redux';

import { AuthService } from '../auth/auth.service';
import { ForumCategoryActions } from '../../actions/forum-category.actions';
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

	constructor(private authHttp: AuthHttp, private actions: ForumCategoryActions, private discoverService: DiscoveryService, private authService: AuthService) { }

	ngOnInit() {
		this.discoverService.getServiceUrl('desert-monsters-forum-service',
			(url) => {
				this.authHttp.get(`http://${url}/categories`)
					.map(res => res.json())
					.subscribe(
					data => data && data.ok && data.categories && data.categories.length && this.actions.getCategories(data.categories),
					err => console.log(err)
					);
			},
			err => console.log(err)
		);
	}

	expandMessage(message) {
		message.expanded = !message.expanded;
	}
}
