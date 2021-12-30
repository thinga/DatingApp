import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProductPagination } from '../_models/ProductPagination';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  baseUrl = 'https://localhost:5001/api/';

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get<IProductPagination>(this.baseUrl + 'products?pageSize=50');
    }
}
