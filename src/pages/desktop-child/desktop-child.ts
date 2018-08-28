import { Component, Input } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DesktopChildPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-desktop-child',
  templateUrl: 'desktop-child.html'
})
export class DesktopChildPage {
  private pageNum: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.pageNum = this.navParams.get('pageNumber');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DesktopChildPage');
  }
}
