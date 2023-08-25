
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap} from 'rxjs';
import { NftInterface } from '../models/nft-interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NftService {

  urlnft:string = "http://localhost:8000/api/n_f_ts";

  private nftsSubject = new BehaviorSubject<NftInterface[] | undefined>(undefined);
  nfts$ = this.nftsSubject.asObservable();

  constructor(private http: HttpClient) { }

  getNfts(): Observable<any>{
    return this.http.get<NftInterface[]>(this.urlnft);
  }

  getNft(id:number): Observable<any>{
    return this.http.get<NftInterface>(`${this.urlnft}/${id}`);
  }

  dropNft(id: number): Observable<any> {
    return this.http.delete<NftInterface>(`${this.urlnft}/${id}`).pipe(
      tap(() => {
        const updatedNfts = this.nftsSubject.value?.filter(nft => nft.id !== id);
        this.nftsSubject.next(updatedNfts);
      })
    );
  }
}
