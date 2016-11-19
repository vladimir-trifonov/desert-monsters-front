import {Component, ViewEncapsulation} from '@angular/core';
@Component({
  selector: 'layout',
  encapsulation: ViewEncapsulation.None,
  styles: [],
  template: `
    <ba-page-top></ba-page-top>
    <div class="al-main">
      <div class="al-content">
        <ba-content-top></ba-content-top>
        <router-outlet></router-outlet>
      </div>
    </div>
    <footer class="al-footer clearfix">
      <div class="al-footer-right">Created with <i class="ion-heart"></i></div>
      <div class="al-footer-main clearfix">
        <div class="al-copy">&copy; <a href="http://ycard.online">YCard</a> Online</div>
      </div>
    </footer>
    <ba-back-top position="200"></ba-back-top>
    `
})
export class Layout {

  constructor() {
  }

  ngOnInit() {
  }
}
