import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyAccountComponent } from './my-account/my-account.component';
import { AppRoutingModule } from '../app-routing.module';
import { PopupDeleteNftComponent } from './popup-delete-nft/popup-delete-nft.component';



@NgModule({
  declarations: [
    MyAccountComponent,
    PopupDeleteNftComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    MyAccountComponent
  ]
})
export class MyAccountModule { }
