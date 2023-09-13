import { Component, EventEmitter, Input, Output} from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NftInterface } from 'src/app/models/nft-interface';
import { UserInterface } from 'src/app/models/user-interface';
import { NftService } from 'src/app/services/nft.service';

@Component({
  selector: 'app-popup-delete-nft',
  templateUrl: './popup-delete-nft.component.html',
  styleUrls: ['./popup-delete-nft.component.css']
})
export class PopupDeleteNftComponent {

  @Input() connectedUser: UserInterface|undefined;
  @Input() connectedUserNfts!: NftInterface[];
  @Input() nftId!: number;
  @Input() nft!: NftInterface;
  @Output() numberofNftsChanged = new EventEmitter<number>();

  handleNftsNumber(number: number): void{
    this.numberofNftsChanged.emit(number);
  }

  constructor(
    public nftService:NftService,
    private toastrService:ToastrService
    ){}

  deleteNftConfirmed(id:number, event:MouseEvent){
    this.deleteNftAndUpdateNftList(id);
    this.deleteHtmlNft(event);
    this.displayNonePopup(event);
    this.handleNftsNumber(1);
  }
  deleteNftCanceled(event:MouseEvent){
    this.displayNonePopup(event);
  }

  deleteNftAndUpdateNftList(id: number) {
    this.nftService.dropNft(id).subscribe(
      () => {
        this.connectedUserNfts = this.connectedUserNfts.filter(nft => nft.id !== id);
        this.toastrService.success("Suppression du Nft réussie");
      },
      (error) => {
        this.toastrService.error("Echec de la suppression du Nft");
      }
    );
    const body = document.querySelector('body');
    body!.style.overflowY = "visible";
  }

  displayNonePopup(event: MouseEvent){
    const button = event.target as HTMLElement;
    const parentNode :any=button.parentNode!.parentNode;
    parentNode!.classList.toggle('hidden');
    const body = document.querySelector('body');
    body!.style.overflowY ="visible"
  }

    deleteHtmlNft(event: MouseEvent): void {
    const displayedNft:any = (event.target as HTMLElement).parentNode?.parentNode?.parentNode?.parentNode;
    displayedNft.classList="d-none";
  }
}
