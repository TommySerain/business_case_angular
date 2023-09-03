import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyAccountComponent } from './my-account/my-account.component';
import { AppRoutingModule } from '../app-routing.module';
import { PopupDeleteNftComponent } from './popup-delete-nft/popup-delete-nft.component';
import { EditNftComponent } from './edit-nft/edit-nft.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddNftComponent } from './add-nft/add-nft.component';
import { AddCollectionComponent } from './add-collection/add-collection.component';
import { EditProfilComponent } from './edit-profil/edit-profil.component';
import { AdminModule } from '../admin/admin.module';



@NgModule({
  declarations: [
    MyAccountComponent,
    PopupDeleteNftComponent,
    EditNftComponent,
    AddNftComponent,
    AddCollectionComponent,
    EditProfilComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AdminModule
  ],
  exports: [
    MyAccountComponent,
    PopupDeleteNftComponent
  ]
})
export class MyAccountModule { }
