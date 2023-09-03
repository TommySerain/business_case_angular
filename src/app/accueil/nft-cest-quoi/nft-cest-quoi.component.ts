import { Component } from '@angular/core';

@Component({
  selector: 'app-nft-cest-quoi',
  standalone:true,
  imports:[],
  templateUrl: './nft-cest-quoi.component.html',
  styleUrls: ['./nft-cest-quoi.component.css', '../accueil/accueil.component.css']
})
export class NftCestQuoiComponent {
  public content: string = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat distinctio quod a, fugiat debitis consectetur voluptate explicabo fugit doloremque officia architecto, impedit placeat ullam ea expedita soluta voluptas accusamus amet quae. Eius, exercitationem autem. Doloremque, optio cupiditate aliquid ipsam reprehenderit nulla quod hic, et iure rem alias sequi provident eligendi a repellendus nemo fuga consequuntur, perferendis nihil ratione possimus? Dicta ex esse nemo natus cum quidem saepe cumque sint, temporibus fugiat? Quaerat, suscipit itaque hic earum inventore assumenda cum nisi ex voluptates adipisci quidem rerum amet vitae, reiciendis debitis sit laudantium facere laborum maxime? Ad qui quaerat sed natus fugit?`

  displayContent(event: MouseEvent):void{
    const mobileContend=document.querySelector('.contentNft');
    mobileContend?.classList.toggle('hidden');
    const arrow = event.target as HTMLElement;
    arrow.style.transition= 'all 500ms'
    if(arrow.style.rotate=='180deg'){
      arrow.style.rotate='0deg';
    }else{
      arrow.style.rotate='180deg';
    }
    
  }
}
