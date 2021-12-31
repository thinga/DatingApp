import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { IBrand } from '../_models/brand';
import { IProductPagination } from '../_models/ProductPagination';
import { IType } from '../_models/type';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  baseUrl = 'https://localhost:5001/api/';

  constructor(private http: HttpClient) { }

  getProducts(brandId?: number, typeId?: number, sort?: string)  {
    let params = new HttpParams();

    if (brandId) {
    params = params.append('brandId', brandId.toString());
    }

    if (typeId) {
    params = params.append('typeId', typeId.toString());
    }

    if (sort) {
      params = params.append('sort', sort);
      }


    return this.http.get<IProductPagination>(this.baseUrl + 'products', {observe: 'response', params})
    .pipe(
    map(response => {
    return response.body;
    })
    );
    }


    getBrands() {
      return this.http.get<IBrand[]>(this.baseUrl + 'products/brands');
      }

    getTypes() {
      return this.http.get<IType[]>(this.baseUrl + 'products/types');
      }
}
