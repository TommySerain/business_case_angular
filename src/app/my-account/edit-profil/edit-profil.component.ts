import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserInterface } from 'src/app/models/user-interface';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-profil',
  templateUrl: './edit-profil.component.html',
  styleUrls: ['./edit-profil.component.css']
})
export class EditProfilComponent implements OnInit {

  public connectedUser!: UserInterface

  constructor(
    private userService:UserService,
    private router: Router,
    private formBuilder: FormBuilder,
    private toastr: ToastrService
    ){}

  ngOnInit(): void {
    this.connectedUser=this.userService.retrieveUserData();
    if (!this.connectedUser){
      this.router.navigate(['/login']);
    }
    console.log('userEdit : ', this.connectedUser)
    console.log('type : ', typeof(this.editProfilform))
    console.log('what : ', typeof(this.editProfilform.value.country!.name))
    console.log('what2 : ', this.connectedUser.country.name)
    
  }

  // reactiveForm
  title = 'editProfilform';
  editProfilform = this.formBuilder.group({
    email: [this.connectedUser?.email],
    lastname: [this.connectedUser?.lastname],
    firstname: [this.connectedUser?.firstname],
    pseudo: [this.connectedUser?.pseudo],
    address: [this.connectedUser?.address],
    zipcode: [this.connectedUser?.zipcode],
    country: this.formBuilder.group({
      name: [""]
    }),
  })

  onSubmit(){
    this.completeNullInput();
    if (this.editProfilform.invalid) {
      this.toastr.error('Erreur, Formulaire invalide');
      return;
    }

    this.userService.editUserData(this.connectedUser!.id!, this.editProfilform.value).subscribe(() => {
      this.toastr.success('Profile utilisateur modifié avec succès !');
      this.router.navigate(['']);
    },(err) => {
      let duplicateMail: string=err.error['hydra:description'].includes('1062 Duplicata du champ');
      if (duplicateMail) {
        this.toastr.error("Echec de l'inscription, email déjà existant");
      }else{
      this.toastr.error("Echec de l'inscription, veuillez vérifier vos informations");
      // console.log(this.signUpform.getRawValue())
      // console.log("error", err);
      };
    }
  )}

  completeNullInput(){
    if(this.editProfilform.value.email===null){
      this.editProfilform.get('email')?.setValue(this.connectedUser?.email);
    }
    if(this.editProfilform.value.firstname===null){
      this.editProfilform.get('firstname')?.setValue(this.connectedUser?.firstname);
    }
    if(this.editProfilform.value.lastname===null){
      this.editProfilform.get('lastname')?.setValue(this.connectedUser?.lastname);
    }
    if(this.editProfilform.value.pseudo===null){
      this.editProfilform.get('pseudo')?.setValue(this.connectedUser?.pseudo);
    }
    if(this.editProfilform.value.address===null){
      this.editProfilform.get('address')?.setValue(this.connectedUser?.address);
    }
    if(this.editProfilform.value.zipcode===null){
      this.editProfilform.get('zipcode')?.setValue(this.connectedUser?.zipcode);
    }
    if(this.editProfilform.value.country!.name===null){
      this.editProfilform.get("country.name")?.setValue(this.connectedUser.country.name);
    }
  }
}
