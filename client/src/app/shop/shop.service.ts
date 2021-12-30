import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IBrand } from '../_models/brand';
import { IProductPagination } from '../_models/ProductPagination';
import { IType } from '../_models/type';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  baseUrl = 'https://localhost:5001/api/';

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get<IProductPagination>(this.baseUrl + 'products?pageSize=50');
    }

    getBrands() {
      return this.http.get<IBrand[]>(this.baseUrl + 'products/brands');
      }

    getTypes() {
      return this.http.get<IType[]>(this.baseUrl + 'products/types');
      }
}
