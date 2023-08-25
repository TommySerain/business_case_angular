import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserInterface } from '../models/user-interface';
import { Observable } from 'rxjs';
import { FormGroup } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  public urlUser:string = "http://localhost:8000/api/users";
  public urlBase:string = "http://localhost:8000"

  public connectedUser?: UserInterface;

  constructor(
    private http: HttpClient,
    ) { }

  getUsers(): Observable<UserInterface[]> {
    return this.http.get<UserInterface[]>(this.urlUser).pipe(
    );
  }

  getUser(iri:string): Observable<any>{
    return this.http.get<UserInterface>(`${this.urlBase}${iri}`);
  }

  addUser(formData: FormGroup): Observable<any>{
    return this.http.post(this.urlUser, formData.getRawValue());
  }

  filterUsersByEmail(users: UserInterface[], email: string): UserInterface[] {
    return users.filter(user => user.email === email);
  }

  retrieveUserData(): UserInterface|undefined {
    let email:string = localStorage['user_key'];
    this.getUsers().subscribe(
      (response: any) => {
        const users = response['hydra:member'];
        const filteredUsers: UserInterface[] = this.filterUsersByEmail(users, email);
        console.log(filteredUsers)
        this.connectedUser = filteredUsers[0];
      },
      (error) => {
        console.error('Une erreur s\'est produite : ', error);
      }
    );
    return this.connectedUser;
  }
}
