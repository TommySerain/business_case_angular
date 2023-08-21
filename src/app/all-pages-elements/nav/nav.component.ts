import { Component } from '@angular/core';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  constructor(private tokenService:TokenService){}

  isLoggedIn(): boolean {
    return this.tokenService.getIsLogged();
  }

  disconnected(){
    this.tokenService.clearUser();
  }

}
