import { Component, Input} from '@angular/core';
import { CategoryInterface } from 'src/app/models/category-interface';
import { NftInterface } from 'src/app/models/nft-interface';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent{

  @Input() data!:NftInterface
  handleClick(){
    // console.log(this.data.category)
  }
}
