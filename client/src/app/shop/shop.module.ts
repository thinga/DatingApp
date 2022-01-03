import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from './product-item/product-item.component';
import { ShopComponent } from './shop.component';
import { SharedModule } from '../shared/shared.module';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { RouterModule } from '@angular/router';
import { ShopRoutingModule } from './shop-routing.module';




@NgModule({
  declarations: [
    ProductItemComponent,
    ShopComponent,
    ProductDetailsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    ShopRoutingModule
  ],
  exports: [ShopComponent]
})
export class ShopModule { }
