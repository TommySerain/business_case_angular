import { Component, Input } from '@angular/core';
import { NftInterface } from 'src/app/models/nft-interface';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent {

  @Input() data!:NftInterface

}
