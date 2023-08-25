import { AfterViewInit, Component, OnInit, SimpleChanges } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
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
export class MyAccountComponent implements OnInit, AfterViewInit {

  public connectedUser: UserInterface|undefined;
  public connectedUserNfts:NftInterface[]=[];
  public userNumberOfNfts:number=0;
  public ethValue!: any;
  public nftId:number=-2
  
  constructor(
    private tokenService:TokenService,
    private userService:UserService,
    private ethService:ApiEthService,
    public nftService:NftService,
    private toastrService:ToastrService
    ){}
    
  ngOnInit(): void {
    this.getActualEthValue();
    if(localStorage['token']){
      this.tokenService.verifyUserNameWithToken();
    }
    this.connectedUser=this.userService.retrieveUserData()
    this.getUserNft();
    this.getnumberOfNfts();
    console.log('init');
  }

  ngAfterViewInit() {
    this.getUserNft();
    this.getnumberOfNfts();
    console.log('changes')
  }

  getnumberOfNfts() {
    this.userNumberOfNfts=this.connectedUserNfts.length
    return this.userNumberOfNfts;
  }

  getUserNft(){
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

  deleteNftAndUpdateNftList(id: number) {
    this.nftService.dropNft(id).subscribe(
      () => {
        console.log("NFT deleted successfully");
        this.connectedUserNfts = this.connectedUserNfts.filter(nft => nft.id !== id);
        this.toastrService.success("Suppression du Nft réussie");
        console.log(this.connectedUserNfts);
      },
      (error) => {
        this.toastrService.error("Echec de la suppression du Nft");
        console.error("Error deleting NFT:", error);
      }
    );
    const body = document.querySelector('body');
    body!.style.overflowY ="visible"
  }

  displayPopup(event: MouseEvent){
    const button = event.target as HTMLElement;
    const id :number =Number(button.id);
    const popup:HTMLDivElement|null=document.querySelector(`.popup${id}`);
    popup!.classList.toggle('hidden');
    const body = document.querySelector('body');
    body!.style.overflowY ="hidden"

  }
  
  displayNonePopup(event: MouseEvent){
    const button = event.target as HTMLElement;
    const parentNode :any=button.parentNode!.parentNode;
    console.log(parentNode);
    parentNode!.classList.toggle('hidden');
    const body = document.querySelector('body');
    body!.style.overflowY ="visible"
  }

  // deleteHtmlNft(event: MouseEvent): void {
  //   const displayedNft:any = (event.target as HTMLElement).parentNode?.parentNode;
  //   this.deleteHtmlNft(displayedNft)
  //   console.log("displayedNft", displayedNft);
  // }
}
