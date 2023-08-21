import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CountryInterface } from '../models/country-interface';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private http: HttpClient) { }

  urlCountries:string = "http://localhost:8000/api/countries";

  getCountries(): Observable<any>{
    return this.http.get<CountryInterface[]>(this.urlCountries);
  }
}
