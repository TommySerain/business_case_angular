import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyAccountComponent } from './my-account/my-account.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    MyAccountComponent
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
