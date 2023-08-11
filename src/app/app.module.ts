import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { BanniereComponent } from './banniere/banniere.component';
import { AccueilModule } from './accueil/accueil.module';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    BanniereComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccueilModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
