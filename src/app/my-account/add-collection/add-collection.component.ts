import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserInterface } from 'src/app/models/user-interface';
import { CollectionService } from 'src/app/services/collection.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-collection',
  templateUrl: './add-collection.component.html',
  styleUrls: ['./add-collection.component.css']
})
export class AddCollectionComponent implements OnInit {

  public connectedUser: UserInterface=this.userService.retrieveUserData();

  constructor(
    private userService: UserService,
    private collectionService: CollectionService,
    private toast: ToastrService,
    private router: Router,
    private formBuilder:FormBuilder
    ){}

ngOnInit(): void {
  if(!this.connectedUser){
    this.router.navigate(['']);
  }

}

// Form 
title = 'Add Collection';
addCollectionForm = this.formBuilder.group({
  name: ['', Validators.required],
  user :[""]
})

onSubmit(){
  const UserIri: string = `http://localhost:8000/api/users/${this.connectedUser.id}`
  this.addCollectionForm.get('user')?.setValue(UserIri);
  console.log('Add Collection : ', UserIri)
  console.log('Add Collection : ', this.connectedUser.id)
  console.log('Add Collection : ', this.addCollectionForm)
  this.collectionService.addCollection(this.addCollectionForm)
  .subscribe(
    ()=> { this.toast.success(`Création de la Collection ${this.addCollectionForm.value.name} réussie`);
    this.router.navigate(['/myAccount']);
    },
    (err)=>{
      this.toast.error('Echec de la création de la Collection')
    })
  }

}
