import { Component } from '@angular/core';

@Component({
  selector: 'app-why-ethereum',
  standalone:true,
  imports:[],
  templateUrl: './why-ethereum.component.html',
  styleUrls: ['./why-ethereum.component.css', '../accueil/accueil.component.css']
})
export class WhyEthereumComponent {

  public contentCommentEvolue: string = `Le prix de l'Ether (ETH) évolue en fonction de la demande et de l'offre, des actualités du marché et de la technologie Ethereum. L'adoption croissante de la plateforme Ethereum, les événements du marché, la concurrence avec d'autres cryptomonnaies et le sentiment des investisseurs sont des facteurs clés influençant sa valeur.`
  public contentETH: string = ` alimente la plateforme Ethereum, l'une des blockchains les plus populaires et innovantes. Il a été créé pour exécuter des contrats intelligents et des applications décentralisées (dApps) sur Ethereum. Sa technologie de contrat intelligent permet des applications automatisées et transparentes.`
  displayContent(event: MouseEvent):void{
    const mobileContend=document.querySelector('.contentWhyEth');
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
