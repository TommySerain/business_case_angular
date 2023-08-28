import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryInterface } from '../models/category-interface';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  urlCategories:string = "http://localhost:8000/api/categories";

  getCategories(): Observable<any>{
    return this.http.get<CategoryInterface[]>(this.urlCategories);
  }
}
