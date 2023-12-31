import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { NftInterface } from 'src/app/models/nft-interface';
import { UserInterface } from 'src/app/models/user-interface';
import { ApiEthService } from 'src/app/services/api-eth.service';
import { NftService } from 'src/app/services/nft.service';
import { TokenService } from 'src/app/services/token.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit{

  public connectedUser: UserInterface=this.userService.retrieveUserData();
  public connectedUserNfts:NftInterface[]=this.connectedUser?.nft || [];
  public userNumberOfNfts:number=this.connectedUserNfts.length;
  public ethValue!: any;
  public nftId:number=-2
  public isAdmin!:boolean
  public connectedUserRole!:string[]
  
  constructor(
    private userService:UserService,
    private ethService:ApiEthService,
    public nftService:NftService,
    private tokenService:TokenService,
    private router: Router,
    ){}
    
  ngOnInit(): void {
    this.getActualEthValue();
    this.connectedUser=this.userService.retrieveUserData();
    this.connectedUserNfts=this.connectedUser?.nft || [];
    this.isAdmin=this.tokenService.isUserAdmin();
    // this.decodedToken=this.tokenService.decodeJwt(this.tokenService.getToken()!)
    // this.connectedUserRole=this.decodedToken.roles
    if(!this.connectedUser){
      this.router.navigate(['/login']);
    }
  }

  updateNumberOfNfts(newCount:number){
    this.userNumberOfNfts-=newCount;
  }

  getnumberOfNfts():number {
    this.userNumberOfNfts=this.connectedUserNfts.length
    return this.userNumberOfNfts;
  }

  getUserNft(): NftInterface[]{
    this.connectedUserNfts = this.connectedUser?.nft || [];
    return this.connectedUserNfts 
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

  // isUserAdmin():boolean{
  //   return(this.connectedUserRole.includes('ROLE_ADMIN'))
  // }
}
