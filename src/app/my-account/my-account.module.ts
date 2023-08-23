import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyAccountComponent } from './my-account/my-account.component';



@NgModule({
  declarations: [
    MyAccountComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    MyAccountComponent
  ]
})
export class MyAccountModule { }
