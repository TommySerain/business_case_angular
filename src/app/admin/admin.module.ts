import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminUserComponent } from './admin-user/admin-user.component';




@NgModule({
  declarations: [
    AdminUserComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [AdminUserComponent]
})
export class AdminModule { }
