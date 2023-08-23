import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/services/token.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {

  constructor(
    private tokenService:TokenService,
    private userService:UserService,
    

    ){}
  
  ngOnInit(): void {
    if(localStorage['token']){
      this.tokenService.verifyUserNameWithToken();
    }
    this.rechercheUtilisateur()
  }

  rechercheUtilisateur() {
    let email = localStorage['user_key'];
    this.userService.getUsers().subscribe(
      (response: any) => {
        const users = response['hydra:member'];
        const filteredUsers = this.userService.filterUsersByEmail(users, email);
        console.log(filteredUsers);
      },
      (error) => {
        console.error('Une erreur s\'est produite : ', error);
      }
    );
  }

}
