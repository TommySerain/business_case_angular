import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenInterface } from '../models/token-interface';
import { IdentifiantsInterface } from '../models/identifiants-interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url:string = "http://localhost:8000/api/login_check";

  constructor(private http: HttpClient) {}

  checkUser(credential: IdentifiantsInterface): Observable<TokenInterface>{
    return this.http.post<TokenInterface>(this.url, credential);
  }

}
