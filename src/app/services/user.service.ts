import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserInterface } from '../models/user-interface';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { FormGroup } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  public urlUser:string = "http://localhost:8000/api/users";
  public urlBase:string = "http://localhost:8000"

  public connectedUser?: UserInterface;
  private UserSubject = new BehaviorSubject<UserInterface[] | undefined>(undefined);
  nfts$ = this.UserSubject.asObservable();


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

  editUserData(id:number, dataFromEditor:any): Observable<any>{
    const headers = new HttpHeaders().set('Content-Type', 'application/merge-patch+json');
    return this.http.patch<UserInterface>(`${this.urlUser}/${id}`, dataFromEditor, { headers }).pipe(
      tap(() => {
        const updatedUser = this.UserSubject.value?.map(user => user.id === id ? { ...user, ...dataFromEditor}: user);
        this.UserSubject.next(updatedUser);
      }
    ))
  }

}
