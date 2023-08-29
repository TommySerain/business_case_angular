import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CollectionInterface } from '../models/collection-interface';
import { Observable } from 'rxjs';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CollectionService {

  public urlCollections:string = "http://localhost:8000/api/collection_nfts";
  public urlBase:string = "http://localhost:8000"

  constructor(
    private http: HttpClient,
    ) { }

  getCollections(): Observable<CollectionInterface[]> {
    return this.http.get<CollectionInterface[]>(this.urlCollections).pipe(
    );
  }

  getCollection(iri:string): Observable<any>{
    return this.http.get<CollectionInterface>(`${this.urlBase}${iri}`);
  }

  addCollection(formData: FormGroup): Observable<any>{
    return this.http.post(this.urlCollections, formData.getRawValue());
  }
}
