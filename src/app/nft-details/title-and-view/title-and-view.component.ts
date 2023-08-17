import { Component, Input} from '@angular/core';
import { NftInterface } from 'src/app/models/nft-interface';
import { UserInterface } from 'src/app/models/user-interface';

@Component({
  selector: 'app-title-and-view',
  templateUrl: './title-and-view.component.html',
  styleUrls: ['./title-and-view.component.css']
})
export class TitleAndViewComponent{

  @Input() data!:NftInterface
  @Input() possesseur!:UserInterface
  
}

