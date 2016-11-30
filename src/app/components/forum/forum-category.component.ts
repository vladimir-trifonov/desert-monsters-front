import { Component, ViewEncapsulation } from '@angular/core';
import { AsyncPipe } from '@angular2/common';
import { select } from 'ng2-redux';

import { ForumCategoryActions } from '../../actions/forum-category.actions';
import { ActiveForumCategoryActions } from '../../actions/active-forum-category.actions';

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

	constructor(private activeForumCategoryActions: ActiveForumCategoryActions, private forumCategoryActions: ForumCategoryActions) { }

	ngOnInit() {
		this.forumCategoryActions.getCategoriesFromDb();

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
