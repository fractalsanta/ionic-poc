import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DesktopPage } from './desktop';

@NgModule({
  declarations: [DesktopPage],
  imports: [IonicPageModule.forChild(DesktopPage)],
  exports: [DesktopPage]
})
export class DesktopPageModule {}
