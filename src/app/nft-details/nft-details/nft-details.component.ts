import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { NftInterface } from 'src/app/models/nft-interface';
import { UserInterface } from 'src/app/models/user-interface';
import { NftService } from 'src/app/services/nft.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-nft-details',
  templateUrl: './nft-details.component.html',
  styleUrls: ['./nft-details.component.css']
})
export class NftDetailsComponent implements OnInit {

  public nft!: NftInterface;
  public possesseur!: UserInterface;
  constructor(
    private route: ActivatedRoute,
    private nftService: NftService,
    // private userService: UserService
  ) { }

  ngOnInit() {
    // this.getNftDetailsAndUser();
    this.getNftDetails();
  }

  // getNftDetailsAndUser() {
  //   const idParam = this.route.snapshot.paramMap.get('id');
  //   if (idParam !== null) {
  //     const id = +idParam;
  //     this.nftService.getNft(id).pipe(
  //       tap(nft => this.nft = nft),
  //       switchMap(() => {
  //         if (this.nft && this.nft.user) {
  //           return this.userService.getUser(this.nft.user);
  //         } else {
  //           throw new Error("NFT or user not available");
  //         }
  //       })
  //     ).subscribe((possesseur) => this.possesseur = possesseur);
  //   }
  // }

  getNftDetails(){
    const idParam = this.route.snapshot.paramMap.get('id');
    if(idParam!==null){
      const id=+idParam;
      this.nftService
      .getNft(id)
      .subscribe((nft) => {this.nft = nft})
    }
  }
  // getNftUser(){
  //   this.userService
  //       .getUser(this.nft.user)
  //       .subscribe(
  //         (possesseur) => this.possesseur = possesseur
  //       );
  // }


}
