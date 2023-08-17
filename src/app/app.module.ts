import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './all-pages-elements/nav/nav.component';
import { BanniereComponent } from './all-pages-elements/banniere/banniere.component';
import { AccueilModule } from './accueil/accueil.module';
import { FooterComponent } from './all-pages-elements/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { NftDetailsModule } from './nft-details/nft-details.module';
import { AllPagesElementsModule } from './all-pages-elements/all-pages-elements.module';





@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccueilModule,
    NftDetailsModule,
    HttpClientModule,
    AllPagesElementsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
