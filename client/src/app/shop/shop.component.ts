import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IBrand } from '../_models/brand';
import { IProduct } from '../_models/product';
import { IProductPagination } from '../_models/ProductPagination';
import { IType } from '../_models/type';
import { ShopService } from './shop.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  products: IProduct[];
  brands: IBrand[];
  types: IType[];

  constructor(private shopService: ShopService) { }

  ngOnInit(): void {
    this.getProducts();
    this.getBrands();
    this.getTypes();
  }

  getProducts() {
    this.shopService.getProducts().subscribe(response => {
    this.products = response.data;
    }, error => {
    console.log(error);
    });
    }
    getBrands() {
    this.shopService.getBrands().subscribe(response => {
    this.brands = response;
    }, error => {
     console.log(error);
    });
    }
    getTypes() {
    this.shopService.getTypes().subscribe(response => {
    this.types = response;
    }, error => {
    console.log(error); });
    }

}



