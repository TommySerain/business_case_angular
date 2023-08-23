import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserInterface } from 'src/app/models/user-interface';
import { TokenService } from 'src/app/services/token.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {

  public connectedUser: UserInterface|undefined;

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

  rechercheUtilisateur(): void {
    let email:string = localStorage['user_key'];
    this.userService.getUsers().subscribe(
      (response: any) => {
        const users = response['hydra:member'];
        const filteredUsers: UserInterface[] = this.userService.filterUsersByEmail(users, email);
        this.connectedUser = filteredUsers[0];
      },
      (error) => {
        console.error('Une erreur s\'est produite : ', error);
      }
    );
  }

}
