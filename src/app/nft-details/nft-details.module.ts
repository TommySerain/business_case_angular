import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NftDetailsComponent } from './nft-details/nft-details.component';



@NgModule({
  declarations: [
    NftDetailsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NftDetailsComponent
  ]
})
export class NftDetailsModule { }
