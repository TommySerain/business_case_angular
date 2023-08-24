import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/services/token.service';



@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  
  constructor(private tokenService:TokenService){}

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
  }

}
