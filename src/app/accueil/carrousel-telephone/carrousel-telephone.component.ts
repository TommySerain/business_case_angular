import { Component } from '@angular/core';
import { NftInterface } from 'src/app/models/nft-interface';
import { NftService } from 'src/app/services/nft.service';

@Component({
  selector: 'app-carrousel-telephone',
  templateUrl: './carrousel-telephone.component.html',
  styleUrls: ['./carrousel-telephone.component.css']
})

export class CarrouselTelephoneComponent {

  private nfts!: NftInterface[];
  private nftTel!: Array<NftInterface>
  private fondHolo!:HTMLDivElement|null;
  private holo!:HTMLImageElement|null;
  private i:number=0;
  private link:any;

  getRandomNft(){
    setTimeout(() =>{
      this.nftTel=[
      this.nfts[Math.floor(Math.random() * this.nfts.length)],
      this.nfts[Math.floor(Math.random() * this.nfts.length)],
      this.nfts[Math.floor(Math.random() * this.nfts.length)],
      this.nfts[Math.floor(Math.random() * this.nfts.length)]
    ]
    },2000)
  }

  constructor(private nftService: NftService){}
  ngOnInit(): void {
    this.nftService
        .getNfts()
        .subscribe(
          nfts => this.nfts = nfts['hydra:member']
        );
        this.getRandomNft() ;
      }

  handlePhoneClick(){
    // console.log("test");
    this.fondHolo=document.querySelector("#fondHolo");
    this.holo=document.querySelector("#telHolo");
    this.link=document.querySelector('.telHoloLink');
    if(!this.holo?.getAttribute('alt')){
      this.holo!.setAttribute('alt',`${this.nftTel[0].id}`)
    }
    if(!this.holo?.getAttribute('src')){
      this.holo!.setAttribute("src",this.nftTel[0].img);
    }
    this.holo!.style.width="80%";
    this.holo!.style.height="80%";
    this.holo!.style.transformOrigin="bottom center";
    this.holo!.style.transition="all 1000ms";
    this.holo!.classList.toggle("holo-hidden");
    this.fondHolo!.classList.toggle("holo-hidden");
  }

  handleRightClick(){
    this.fondHolo=document.querySelector("#fondHolo");
    this.holo=document.querySelector("#telHolo");
    this.holo!.classList.add("holo-hidden");
    this.fondHolo!.classList.add("holo-hidden");
    setTimeout(() => {
        if (this.i==this.nftTel.length-1) {
            this.i=0
        }else{
            this.i++
        }
        this.holo!.setAttribute("src",this.nftTel[this.i].img)
        this.link!.setAttribute("routerLink",this.nftTel[this.i].id);
        this.holo!.setAttribute('alt',`${this.nftTel[this.i].id}`)
        this.holo!.classList.toggle("holo-hidden");
        this.fondHolo!.classList.toggle("holo-hidden");
        }, 1000);
        // console.log(this.i, this.nftTel.length)
  }

  handleLeftClick(){
    this.fondHolo=document.querySelector("#fondHolo");
    this.holo=document.querySelector("#telHolo");
    this.holo!.classList.add("holo-hidden");
    this.fondHolo!.classList.add("holo-hidden");
    setTimeout(() => {
        if (this.i===0) {
            this.i=this.nftTel.length-1
        }else{
            this.i--
        }
        this.holo!.setAttribute("src",this.nftTel[this.i].img)
        this.link!.setAttribute("routerLink",this.nftTel[this.i].id);
        this.holo!.setAttribute('alt',`${this.nftTel[this.i].id}`)
        this.holo!.classList.toggle("holo-hidden");
        this.fondHolo!.classList.toggle("holo-hidden");
        }, 1000);
        // console.log(this.i, this.nftTel.length)
  }
}