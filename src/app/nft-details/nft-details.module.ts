import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NftDetailsComponent } from './nft-details/nft-details.component';

import { DescriptionComponent } from './description/description.component';
import { DetailsComponent } from './details/details.component';
import { AppRoutingModule } from '../app-routing.module';
import { TitleAndViewComponent } from './title-and-view/title-and-view.component';



@NgModule({
  declarations: [
    // NftDetailsComponent,
    // TitleAndViewComponent,
    // DescriptionComponent,
    // DetailsComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    // NftDetailsComponent,
  ]
})
export class NftDetailsModule { }
