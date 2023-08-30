import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CategoryInterface } from 'src/app/models/category-interface';
import { CollectionInterface } from 'src/app/models/collection-interface';
import { NftInterface } from 'src/app/models/nft-interface';
import { UserInterface } from 'src/app/models/user-interface';
import { CategoryService } from 'src/app/services/category.service';
import { NftService } from 'src/app/services/nft.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-nft',
  templateUrl: './edit-nft.component.html',
  styleUrls: ['./edit-nft.component.css']
})
export class EditNftComponent implements OnInit {

  public connectedUser: UserInterface=this.userService.retrieveUserData();
  private nftId!: number;
  public nft?:NftInterface;
  public categories!: CategoryInterface[];
  public collections?: CollectionInterface[];
  public selectedCategories: any[] = [];


  constructor(
    private userService:UserService,
    public nftService:NftService,
    private categoryService:CategoryService,
    private router: Router,
    private route:ActivatedRoute,
    private formBuilder: FormBuilder,
    private toastr: ToastrService
    ){}

  ngOnInit(): void {
    if (!this.connectedUser){
      this.router.navigate(['/login']);
    }
    this.nftId = Number(this.route.snapshot.paramMap.get('id'));
    this.getNftData();
    this.getCategories()
  }

  getNftData():void{
    this.nftService.getNft(this.nftId).subscribe((response:any) => {
    this.nft = response;
    this.collections = this.connectedUser.collection;
    console.log(this.nft)
    console.log('utilisateur :', this.connectedUser)
    })
  }
  getCategories():void{
    this.categoryService.getCategories().subscribe((categories) =>{
      this.categories = categories['hydra:member']
      console.log(this.categories)
    })
  }

// reactiveForm
title = "editNft";
editNftForm = this.formBuilder.group({
  name: [this.nft?.name],
  description: [this.nft?.description],
  category: [[] as string[], Validators.required] ,
  collection: [] 
});

toggleCategorySelection(categoryId: number):void{
  const categoryControl = this.editNftForm.get('category');
  
  if (categoryControl) {
    const currentCategories = categoryControl.value as number[] | null;
  
    const updatedCategories = (currentCategories ?? []).includes(categoryId)
      ? (currentCategories ?? []).filter(id => id !== categoryId)
      : [...(currentCategories ?? []), categoryId];
  
      this.selectedCategories = updatedCategories;
      console.log(this.selectedCategories)
      categoryControl.setValue(this.selectedCategories);
  }
}

onSubmit() {
  if(this.editNftForm.value.name===null){
    this.editNftForm.get('name')?.setValue(this.nft?.name);
  }
  if(this.editNftForm.value.description===null){
    this.editNftForm.get('description')?.setValue(this.nft?.description);
  }
  if (this.editNftForm.invalid) {
    this.toastr.error('Erreur, Formulaire invalide');
    return;
  }
  
  const selectedCategoryIRIs: string[] = this.selectedCategories.map(categoryId => `http://localhost:8000/api/categories/${categoryId}`);
  console.log('categories : ', this.selectedCategories)
  console.log('select : ', selectedCategoryIRIs);
  const collectionId = this.editNftForm.value.collection;
  const IRICollection: string = `http://localhost:8000/api/collection_nfts/${collectionId}`;
  
  this.editNftForm.get('collection')?.setValue(IRICollection as any);
  this.editNftForm.get('category')?.setValue(selectedCategoryIRIs);
  
  this.nftService.editNft(this.nftId, this.editNftForm.value).subscribe(() => {
    this.toastr.success('Nft modifié avec succès !');
    this.router.navigate(['/myAccount']);
  });
}

}
