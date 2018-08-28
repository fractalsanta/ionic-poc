import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MobileChildPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mobile-child',
  templateUrl: 'mobile-child.html'
})
export class MobileChildPage {
  private pageNum: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.pageNum = this.navParams.get('pageNumber');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MobileChildPage');
  }
}
