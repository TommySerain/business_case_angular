import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyAccountComponent } from './my-account/my-account.component';
import { AppRoutingModule } from '../app-routing.module';
import { PopupDeleteNftComponent } from './popup-delete-nft/popup-delete-nft.component';
import { EditNftComponent } from './edit-nft/edit-nft.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MyAccountComponent,
    PopupDeleteNftComponent,
    EditNftComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    MyAccountComponent
  ]
})
export class MyAccountModule { }
