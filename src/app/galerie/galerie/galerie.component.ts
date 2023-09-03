import { Component } from '@angular/core';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { NftInterface } from 'src/app/models/nft-interface';
import { UserInterface } from 'src/app/models/user-interface';
import { ApiEthService } from 'src/app/services/api-eth.service';
import { NftService } from 'src/app/services/nft.service';
import { TokenService } from 'src/app/services/token.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-galerie',
  templateUrl: './galerie.component.html',
  styleUrls: ['./galerie.component.css']
})
export class GalerieComponent {

  public connectedUser: UserInterface|undefined;
  public allNfts:NftInterface[]=[];
  public ethValue!: any;
  public isAdmin!:boolean;
  public nftId!: number;

  constructor(
    private tokenService:TokenService,
    private userService:UserService,
    private nftService: NftService,
    private ethService: ApiEthService,

    ){}
  
  ngOnInit(): void {
    this.getActualEthValue();
    if(localStorage['token']){
      this.tokenService.verifyUserNameWithToken();
    }
    this.connectedUser=this.userService.retrieveUserData();
    this.getAllNfts();
    this.isAdmin=this.tokenService.isUserAdmin();
  }

  getAllNfts():void{
    this.nftService.getNfts().subscribe(nfts=>{this.allNfts=nfts['hydra:member']});
  }
  
  getActualEthValue(): void {
    this.ethService
      .loadToDayData()
      .subscribe(
        eth => this.ethValue = eth
      );
  }

  displayPopup(event: MouseEvent){
    const button = event.target as HTMLElement;
    const id :number =Number(button.id);
    const popup:HTMLDivElement|null=document.querySelector(`.popup${id}`);
    popup!.classList.toggle('hidden');
    const body = document.querySelector('body');
    body!.style.overflowY ="hidden"
    this.nftId = id;
  }

}
