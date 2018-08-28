import { DesktopPage } from './../pages/desktop/desktop';
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = HomePage;

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    private alertCtrl: AlertController,
    private plt: Platform
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      //statusBar.styleDefault();
      //splashScreen.hide();

      let alert = this.alertCtrl.create({
        title: 'Platform',
        message: 'You are running on: ' + this.plt.platforms(),
        buttons: ['OK']
      });
      alert.present();

      if (platform.is('core')) {
        // Do desktop stuff
        this.rootPage = DesktopPage;
      } else {
        // Do mobile
      }
    });
  }
}
