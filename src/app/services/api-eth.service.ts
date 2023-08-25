import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiEthService {
  urlSevenDays = "https://min-api.cryptocompare.com/data/v2/histoday?fsym=ETH&tsym=EUR&limit=7";
  urlActualEthInEur = "https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=EUR";

  constructor(private http: HttpClient) { }

  loadData(): Observable<any> {
    return this.http.get(this.urlSevenDays);
  }
  loadToDayData(): Observable<any> {
    return this.http.get(this.urlActualEthInEur);
  }
}