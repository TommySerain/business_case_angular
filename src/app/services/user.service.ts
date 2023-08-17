import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserInterface } from '../models/user-interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  urlUser:string = "http://localhost:8000/api/users";
  urlBase:string = "http://localhost:8000"

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any>{
    return this.http.get<UserInterface[]>(this.urlUser);
  }

  getUser(url:string): Observable<any>{
    return this.http.get<UserInterface>(`${this.urlBase}${url}`);
  }
}