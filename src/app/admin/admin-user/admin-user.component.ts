import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserInterface } from 'src/app/models/user-interface';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-admin-user',
  templateUrl: './admin-user.component.html',
  styleUrls: ['./admin-user.component.css']
})
export class AdminUserComponent {

  public connectedUser!: UserInterface
  public users!: UserInterface[];

  constructor(
    private userService:UserService,
    private router: Router,
    private formBuilder: FormBuilder,
    private toastr: ToastrService
    ){}

  ngOnInit(): void {
    this.connectedUser=this.userService.retrieveUserData();
    if (!this.connectedUser){
      this.router.navigate(['']);
    }
    this.getUsers();
  }

  getUsers():void{
    this.userService.getUsers().subscribe(users =>{
      this.users = users['hydra:member']
      console.log('Attention :', users)
      console.log('user :', this.users)
    })
  }
}
