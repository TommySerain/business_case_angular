import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NftInterface } from 'src/app/models/nft-interface';
import { UserInterface } from 'src/app/models/user-interface';
import { NftService } from 'src/app/services/nft.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-concours',
  standalone:true,
  imports:[RouterLink],
  templateUrl: './concours.component.html',
  styleUrls: ['./concours.component.css']
})
export class ConcoursComponent {

  public nft?: NftInterface;
  private nftId:number = 11;
  public possesseur!: UserInterface;
  constructor(
    private route: ActivatedRoute,
    private nftService: NftService,
    private tokenService:TokenService,
  ) { }
  
  ngOnInit() {
    // this.getNftDetailsAndUser();
    this.getNftDetails(this.nftId);
    if(localStorage['token']){
      this.tokenService.verifyUserNameWithToken();
    }
  }

  getNftDetails(nftId:number){
      this.nftService
      .getNft(nftId)
      .subscribe((nft) => {this.nft = nft})
    }

}
