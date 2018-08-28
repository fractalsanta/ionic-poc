import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { DesktopPage } from './../pages/desktop/desktop';
import { DesktopChildPage } from './../pages/desktop-child/desktop-child';
import { MobileChildPage } from './../pages/mobile-child/mobile-child';
import { LinksComponent } from './../components/links/links';
@NgModule({
  declarations: [MyApp, HomePage, DesktopPage, DesktopChildPage, MobileChildPage, LinksComponent],
  imports: [BrowserModule, IonicModule.forRoot(MyApp)],
  bootstrap: [IonicApp],
  entryComponents: [MyApp, HomePage, DesktopPage, DesktopChildPage, MobileChildPage],
  providers: [StatusBar, SplashScreen, { provide: ErrorHandler, useClass: IonicErrorHandler }]
})
export class AppModule {}
