import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MobileChildPage } from './mobile-child';

@NgModule({
  declarations: [
    MobileChildPage,
  ],
  imports: [
    IonicPageModule.forChild(MobileChildPage),
  ],
})
export class MobileChildPageModule {}
