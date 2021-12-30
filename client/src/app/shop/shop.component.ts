import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IProduct } from '../_models/product';
import { IProductPagination } from '../_models/ProductPagination';
import { ShopService } from './shop.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  products: IProduct[];
  constructor(private shopService: ShopService) { }

  ngOnInit(): void {
    this.shopService.getProducts().subscribe(response => {
        this.products = response.data;
    }, error => {
      console.log(error);
    });
  }
}



