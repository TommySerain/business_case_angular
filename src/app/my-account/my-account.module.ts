import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyAccountComponent } from './my-account/my-account.component';
import { AppRoutingModule } from '../app-routing.module';
import { PopupDeleteNftComponent } from './popup-delete-nft/popup-delete-nft.component';
import { EditNftComponent } from './edit-nft/edit-nft.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddNftComponent } from './add-nft/add-nft.component';
import { AddCollectionComponent } from './add-collection/add-collection.component';



@NgModule({
  declarations: [
    MyAccountComponent,
    PopupDeleteNftComponent,
    EditNftComponent,
    AddNftComponent,
    AddCollectionComponent,
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
