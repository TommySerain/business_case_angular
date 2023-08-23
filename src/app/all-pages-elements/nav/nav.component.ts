import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/services/token.service';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  
  constructor(private tokenService:TokenService,
    private userService:UserService){}

  isTokenVerified(): boolean {
    if(localStorage['token']){
      return this.tokenService.verifyUserNameWithToken();
    }
    return false;
  }

  isLoggedIn(): boolean {
    return this.tokenService.getIsLogged();
  }

  disconnected(){
    this.tokenService.clearUser();
    this.userService.clearUser();
  }

}
