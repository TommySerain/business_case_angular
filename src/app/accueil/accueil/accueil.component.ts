import { Component, OnInit } from '@angular/core';
import { NftInterface } from 'src/app/models/nft-interface';
import { UserInterface } from 'src/app/models/user-interface';
import { NftService } from 'src/app/services/nft.service';
import { TokenService } from 'src/app/services/token.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-accueil',
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
