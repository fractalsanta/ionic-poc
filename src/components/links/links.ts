import { MobileChildPage } from './../../pages/mobile-child/mobile-child';
import { DesktopChildPage } from './../../pages/desktop-child/desktop-child';

import { Component, Input } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Platform } from 'ionic-angular';
@Component({
  selector: 'links',
  templateUrl: 'links.html'
})
export class LinksComponent {
  @Input()
  url1: string;
  @Input()
  url2: string;

  text: string;
  nav: any = DesktopChildPage;

  constructor(platform: Platform, public navCtrl: NavController, public navParams: NavParams) {
    this.text = 'Hello World';
    if (!platform.is('core')) this.nav = MobileChildPage;
  }

  navigate(e) {
    this.navCtrl.push(this.nav, { pageNumber: e });
  }

  navigateBack() {
    this.navCtrl.pop();
  }
}
