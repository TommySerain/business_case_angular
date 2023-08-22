import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilModule } from './accueil/accueil.module';
import { HttpClientModule } from '@angular/common/http';
import { NftDetailsModule } from './nft-details/nft-details.module';
import { AllPagesElementsModule } from './all-pages-elements/all-pages-elements.module';
import { LogModule } from './log/log.module';
import { TokenRequestInterceptorProvider } from './interceptor/token-request.interceptor';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


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
    AllPagesElementsModule,
    LogModule,
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-center-center',
    }),
  ],
  providers: [TokenRequestInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
