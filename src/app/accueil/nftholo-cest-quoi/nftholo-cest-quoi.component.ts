import { Component } from '@angular/core';

@Component({
  selector: 'app-nftholo-cest-quoi',
  standalone:true,
  imports:[],
  templateUrl: './nftholo-cest-quoi.component.html',
  styleUrls: ['./nftholo-cest-quoi.component.css', '../accueil/accueil.component.css']
})
export class NFTHoloCestQuoiComponent {
  public contentTitle: string="NFT'HOLO c'est quoi ?";
  public content: string = `Tatie Josie tout ça tout ça ! <br>
  Egestas auctor a felis tristique ut eleifend integer proin. Duis a nibh porta a mauris nibh dictum sit. Facilisis in viverra pulvinar sed in rutrum vulputate. <br>
  Mauris maecenas in pharetra massa morbi id vel. <br>
  Lorem ipsum dolor sit amet consectetur. <br>
  Egestas auctor a felis tristique ut eleifend integer proin. Duis a nibh porta a mauris nibh dictum sit. Facilisis in viverra pulvinar sed in rutrum vulputate. <br>
  Mauris maecenas in pharetra massa morbi id vel.`

  displayContent(event: MouseEvent):void{
    const mobileContend=document.querySelector('.contentNftHolo');
    mobileContend?.classList.toggle('hidden');
    const arrow = event.target as HTMLElement;
    arrow.style.transition= 'all 500ms'
    if(arrow.style.transform=='rotate(180deg)'){
      arrow.style.transform='rotate(0deg)';
    }else{
      arrow.style.transform='rotate(180deg)';
    }
    
  }

}
