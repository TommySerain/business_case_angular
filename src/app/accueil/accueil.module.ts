import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConcoursComponent } from './concours/concours.component';
import { AccueilComponent } from './accueil/accueil.component';
import { NFTHoloCestQuoiComponent } from './nftholo-cest-quoi/nftholo-cest-quoi.component';
import { NftCestQuoiComponent } from './nft-cest-quoi/nft-cest-quoi.component';
import { CarrouselTelephoneComponent } from './carrousel-telephone/carrousel-telephone.component';
import { WhyEthereumComponent } from './why-ethereum/why-ethereum.component';




@NgModule({
  declarations: [
    ConcoursComponent,
    AccueilComponent,
    NFTHoloCestQuoiComponent,
    NftCestQuoiComponent,
    CarrouselTelephoneComponent,
    WhyEthereumComponent,

  ],
  imports: [
    CommonModule
  ],
  exports: [
    AccueilComponent
  ]
})
export class AccueilModule { }