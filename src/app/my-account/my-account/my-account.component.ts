import { Component, OnInit } from '@angular/core';
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
      this.connectedUser=this.userService.rechercheUtilisateur()
  }

  

}
