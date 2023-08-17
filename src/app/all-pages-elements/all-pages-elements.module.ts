import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BanniereComponent } from './banniere/banniere.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    NavComponent,
    BanniereComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    NavComponent,
    BanniereComponent,
    FooterComponent
  ]
})
export class AllPagesElementsModule { }
