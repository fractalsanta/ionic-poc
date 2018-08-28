import { Component, Output } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ComponentsModule } from './../../components/components.module';
/**
 * Generated class for the DesktopPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-desktop',
  templateUrl: 'desktop.html'
})
export class DesktopPage {
  @Output()
  link1 = 'DesktopChildPage';
  link2 = 'DesktopChildPage';

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {}
}
