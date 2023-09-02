import { Component, OnInit } from '@angular/core';
import { NftInterface } from 'src/app/models/nft-interface';
import { UserInterface } from 'src/app/models/user-interface';
import { NftService } from 'src/app/services/nft.service';
import { TokenService } from 'src/app/services/token.service';
import { UserService } from 'src/app/services/user.service';
import { CarrouselTelephoneComponent } from '../carrousel-telephone/carrousel-telephone.component';
import { ConcoursComponent } from '../concours/concours.component';
import { NFTHoloCestQuoiComponent } from '../nftholo-cest-quoi/nftholo-cest-quoi.component';
import { NftCestQuoiComponent } from '../nft-cest-quoi/nft-cest-quoi.component';
import { WhyEthereumComponent } from '../why-ethereum/why-ethereum.component';
import { CourbeEthComponent } from '../courbe-eth/courbe-eth.component';

@Component({
  selector: 'app-accueil',
  //Passage en standalone
  standalone: true,
  imports : [ConcoursComponent, NFTHoloCestQuoiComponent, NftCestQuoiComponent, CarrouselTelephoneComponent, WhyEthereumComponent, CourbeEthComponent],
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  public connectedUser: UserInterface|undefined;
  public connectedUserNfts:NftInterface[]=[];

  constructor(
    private tokenService:TokenService,
    private userService:UserService,
    private nftService: NftService

    ){}
  
  ngOnInit(): void {
    if(localStorage['token']){
      this.tokenService.verifyUserNameWithToken();
    }
    this.connectedUser=this.userService.retrieveUserData();
    this.getUserNft();
  }

  getUserNft(){
    this.connectedUserNfts = this.connectedUser?.nft || [];
      this.nftService.nfts$.subscribe(() => {
        console.log(this.connectedUserNfts)
      });
  }

}
