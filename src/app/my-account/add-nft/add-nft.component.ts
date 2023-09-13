import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CategoryInterface } from 'src/app/models/category-interface';
import { CollectionInterface } from 'src/app/models/collection-interface';
import { UserInterface } from 'src/app/models/user-interface';
import { ApiEthService } from 'src/app/services/api-eth.service';
import { CategoryService } from 'src/app/services/category.service';
import { NftService } from 'src/app/services/nft.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-nft',
  templateUrl: './add-nft.component.html',
  styleUrls: ['./add-nft.component.css']
})
export class AddNftComponent implements OnInit {
  public connectedUser: UserInterface=this.userService.retrieveUserData();
  public ethValue!: number;
  public selectedCategories: any[] = [];
  public categories!: CategoryInterface[];
  public collections?: CollectionInterface[];
  public currentDate = new Date().toISOString().substr(0, 10);

  constructor(
    private userService: UserService,
    private nftService: NftService,
    private categoryService: CategoryService,
    private apiEthService: ApiEthService,
    private toast: ToastrService,
    private router: Router,
    private formBuilder:FormBuilder
    ){}

    ngOnInit(): void {
      this.getActualEthValue();
      this.getCategories();
      this.collections = this.connectedUser.collection;
    }

    title = 'Add NFT';
    addNftForm = this.formBuilder.group({
      name: ['', Validators.required],
      img :['', Validators.required],
      existingNumber: [0, Validators.required],
      launchDate: [this.currentDate],
      launchPriceEth: [0, Validators.required],
      launchPriceEur: [0],
      collection: ['', Validators.required],
      user: [`http://localhost:8000/api/users/${this.connectedUser.id}`],
      description: ['', Validators.required],
      creator: ['', Validators.required],
      category: [[] as string[]]
    })

  onSubmit(){
    const collectionIri: string = `http://localhost:8000/api/collection_nfts/${this.addNftForm.value.collection}`;
    const selectedCategoryIRIs: string[] = this.selectedCategories.map(categoryId => `http://localhost:8000/api/categories/${categoryId}`);
    this.addNftForm.get('launchPriceEur')?.setValue(this.addNftForm.value.launchPriceEth! * this.ethValue);
    this.addNftForm.get('collection')?.setValue(collectionIri);
    this.addNftForm.get('category')?.setValue(selectedCategoryIRIs);
    this.nftService.addNft(this.addNftForm)
    .subscribe(
      ()=> { this.toast.success(`Création du NFT ${this.addNftForm.value.name} réussie`);
      this.router.navigate(['']);
      },
      (err)=>{
        this.toast.error('Echec de la création du NFT')
      }
    )
  }

  getActualEthValue(): void {
    this.apiEthService
      .loadToDayData()
      .subscribe(
        eth => this.ethValue = eth.EUR
      );
  }

  toggleCategorySelection(categoryId: number):void{
    const categoryControl = this.addNftForm.get('category');
    
    if (categoryControl) {
      const currentCategories = categoryControl.value as number[] | null;
    
      const updatedCategories = (currentCategories ?? []).includes(categoryId)
        ? (currentCategories ?? []).filter(id => id !== categoryId)
        : [...(currentCategories ?? []), categoryId];
    
        this.selectedCategories = updatedCategories;
        categoryControl.setValue(this.selectedCategories);
    }
  }
  getCategories():void{
    this.categoryService.getCategories().subscribe((categories) =>{
      this.categories = categories['hydra:member']
    })
  }

}
