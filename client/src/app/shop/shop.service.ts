import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { IBrand } from '../_models/brand';
import { IProductPagination } from '../_models/ProductPagination';
import { ShopParams } from '../_models/shopParams';
import { IType } from '../_models/type';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  baseUrl = 'https://localhost:5001/api/';

  constructor(private http: HttpClient) { }

  getProducts(shopParams: ShopParams)  {
    let params = new HttpParams();

    if (shopParams.brandId !== 0) {
    params = params.append('brandId', shopParams.brandId.toString());
    }

    if (shopParams.typeId !== 0) {
    params = params.append('typeId', shopParams.typeId.toString());
    }

    params = params.append('sort', shopParams.sort);
    params = params.append('pageIndex', shopParams.pageNumber.toString());
    params = params.append('pageIndex', shopParams.pageSize.toString());

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
