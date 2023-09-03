import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { DecodedTokenInterface } from '../models/decoded-token-interface';
import { ToastrService } from 'ngx-toastr';




@Injectable({
  providedIn: 'root'
})
export class TokenService {

  readonly USER_KEY: string = 'user_key';
  private logged: boolean = false;
  constructor(
    private router: Router,
    private toast: ToastrService
    ) { }

  saveToken(token:string):void {
    localStorage.setItem('token',token);
    this.router.navigate(['/']);
  }

  saveUserCredentials(username:string):void {
    localStorage.setItem(this.USER_KEY, username);
  }

  getToken():string|null{
    return localStorage.getItem('token');
  }

  getIsLogged():boolean{
    return this.logged
  }

  setIsLogged(value:boolean):void{
    this.logged = value;
  }

  clearUser():void {
    localStorage.removeItem('token');
    localStorage.removeItem(this.USER_KEY);
    this.setIsLogged(false);
  }

  decodeJwt(token: string): any {
    try {
      const decodedToken = jwtDecode(token);
      return decodedToken;
    } catch (e) {
      console.error('Erreur lors du décodage du token : ', e);
    }
    return null;
  }
  verifyUserNameWithToken(): boolean {
    const token : string|null = this.getToken();
    const username: string|null = localStorage.getItem('user_key');
    if (token !== null && username !== null) {
      const decodedToken: DecodedTokenInterface = this.decodeJwt(token);
      // pour controller si l'utilisateur n'a pas écrit un token à la main,
      // que ce token a ben une clé username et
      // que ce username est bien égal au username présent dans le localStorage
      if (decodedToken && decodedToken.username === username){
        return true;
      }
    }
    this.setIsLogged(false);
    this.router.navigate(['/login']);
    return false;
  }

  isUserAdmin():boolean{
    const decodedToken=this.decodeJwt(this.getToken()!)
    return decodedToken.roles.includes('ROLE_ADMIN')
  }

  isUserConnectedGuard():boolean{
    const decodedToken=this.decodeJwt(this.getToken()!)
    if(decodedToken.roles.includes('ROLE_USER')){
      return true;
    }else{
      this.toast.error("Vous ne pouvez pas accéder à cette page.");
      this.router.parseUrl('');
      return false;
    }
  }

  isUserAdminGuard():boolean{
    const decodedToken=this.decodeJwt(this.getToken()!)
    if(decodedToken.roles.includes('ROLE_ADMIN')){
      return true;
    }else{
      this.toast.error("Vous ne pouvez pas accéder à cette page.");
      this.router.parseUrl('');
      return false;
    }
  }

}
