
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NftInterface } from '../models/nft-interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NftService {

  url:string = "http://localhost:8000/api/n_f_ts"

  constructor(private http: HttpClient) { }

  getNfts(): Observable<any>{
    return this.http.get<NftInterface[]>(this.url);
  }
}
