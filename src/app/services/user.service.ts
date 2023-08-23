import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserInterface } from '../models/user-interface';
import { Observable } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  urlUser:string = "http://localhost:8000/api/users";
  urlBase:string = "http://localhost:8000"

  constructor(
    private http: HttpClient,
    private tokenService: TokenService
    ) { }

    getUsers(): Observable<UserInterface[]> {
      return this.http.get<UserInterface[]>(this.urlUser).pipe(
      );
    }

  getUser(url:string): Observable<any>{
    return this.http.get<UserInterface>(`${this.urlBase}${url}`);
  }

  addUser(formData: FormGroup): Observable<any>{
    return this.http.post(this.urlUser, formData.getRawValue());
  }

  filterUsersByEmail(users: UserInterface[], email: string): UserInterface[] {
    return users.filter(user => user.email === email);
  }

}
