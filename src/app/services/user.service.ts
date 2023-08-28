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

  findUserByEmail(users: UserInterface[], email: string): UserInterface {
    let filteredUser:UserInterface[] = users.filter(user => user.email === email);
    return filteredUser[0];
    //l'email étant unique en bdd, on sait qu'il n'y aura qu'une valeur dans le tableau filteredUser
    //On return la clé 0 pour avoir un objet User au lieu d'un tableau.
  }
  retrieveUserData(): UserInterface {
    let email:string = localStorage['user_key'];
    this.getUsers().subscribe(
      (response: any) => {
        let users = response['hydra:member'];
        this.connectedUser= this.findUserByEmail(users, email);
      },
      (error) => {
        console.error('Une erreur s\'est produite : ', error);
      }
    );
    return this.connectedUser!;
  }
}
