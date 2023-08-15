import { Component } from '@angular/core';
import { NftInterface } from 'src/app/models/nft-interface';
import { NftService } from 'src/app/services/nft.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {


  nfts!: NftInterface[];
  constructor(private nftService: NftService){}
  ngOnInit(): void {
    this.nftService
        .getNfts()
        .subscribe(
          nfts => this.nfts = nfts['hydra:member']
        );
  }


}
