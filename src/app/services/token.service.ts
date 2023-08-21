import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

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
}
