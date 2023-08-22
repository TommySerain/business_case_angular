import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';



@Injectable({
  providedIn: 'root'
})
export class TokenService {

  readonly USER_KEY: string = 'user_key';
  private logged: boolean = false;

  constructor( private router: Router) { }

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

  decodeJwt(token: any): any {
    try {
      const decodedToken = jwtDecode(token);
      console.log(decodedToken);
      return decodedToken;
    } catch (e) {
      console.error('Erreur lors du décodage du token : ', e);
    }
    return null;
  }

  verifyUserNameWithToken(): any {
    const token = this.getToken();
    const username: any = localStorage.getItem('user_key');

    if (token !== null && username !== null) {
      const decodedToken = this.decodeJwt(token);
      if (decodedToken) {
        if (decodedToken.username === username){
          return true;
        }else{
          this.setIsLogged(false);
    this.router.navigate(['/login']);
    return false;
        };
      }
    }
    this.setIsLogged(false);
    this.router.navigate(['/login']);
    return false;
  }
}
