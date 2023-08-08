import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConcoursComponent } from './concours/concours.component';
import { AccueilComponent } from './accueil/accueil.component';



@NgModule({
  declarations: [
    ConcoursComponent,
    AccueilComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AccueilComponent
  ]
})
export class AccueilModule { }
