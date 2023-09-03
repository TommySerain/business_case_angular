import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalerieComponent } from './galerie/galerie.component';
import { AppRoutingModule } from '../app-routing.module';
import { MyAccountModule } from '../my-account/my-account.module';



@NgModule({
  declarations: [
    GalerieComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MyAccountModule
  ],
  exports:[
    GalerieComponent
  ]
})
export class GalerieModule { }
