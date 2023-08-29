import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiEthService {
  private apiKey:string = '&api_key=7c1d7ebf977c036f35ce5c7611d40d2a53f68e36cb2358af0825a85936a2030f'
  urlSevenDays = "https://min-api.cryptocompare.com/data/v2/histoday?fsym=ETH&tsym=EUR&limit=7"+this.apiKey;
  urlActualEthInEur = "https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=EUR"+this.apiKey;

  constructor(private http: HttpClient) { }

  loadData(): Observable<any> {
    return this.http.get(this.urlSevenDays);
  }
  loadToDayData(): Observable<any> {
    return this.http.get(this.urlActualEthInEur);
  }
}