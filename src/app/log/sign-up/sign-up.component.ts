import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CountryInterface } from 'src/app/models/country-interface';
import { CountryService } from 'src/app/services/country.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css', '../log/log.component.css']
})
export class SignUpComponent implements OnInit {

  public countries!: CountryInterface[];


  ngOnInit(): void {
    this.countryService
        .getCountries()
        .subscribe(
          countries => this.countries = countries['hydra:member']
        );
      }

  constructor(private fb:FormBuilder,
    private userService: UserService,
    private countryService: CountryService,
    private toast: ToastrService,
    private router: Router){}

  title = 'signup';
  signUpform = this.fb.group({
    email: ['', [Validators.email, Validators.required]],
    password: ['', Validators.required],
    passwordTwo: ['', Validators.required],
    lastname: ['', Validators.required],
    firstname: ['', Validators.required],
    pseudo: ['', Validators.required],
    birthdate: ['', Validators.required],
    address: ['', Validators.required],
    zipcode: ['', Validators.required],
    country: this.fb.group({
      name: ['', Validators.required]
    }),
    gender: ['', Validators.required],
  })

  onSubmit():void{
    this.userService.addUser(this.signUpform)
    .subscribe(
      () => {
        this.toast.success("Inscription réussie");
        this.router.navigate(['/login'])
      },
      (err) => {
        let duplicateMail: string=err.error['hydra:description'].includes('1062 Duplicata du champ');
        if (duplicateMail) {
          this.toast.error("Echec de l'inscription, email déjà existant");
        }else{
        this.toast.error("Echec de l'inscription, veuillez vérifier vos informations");
        console.log(this.signUpform.getRawValue())
        console.log("error", err);
        }

      }
    )
    console.log(localStorage)
  }

}


