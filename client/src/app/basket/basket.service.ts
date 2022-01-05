import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { IBasket } from '../_models/basket';

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  baselUrl = environment.apiUrl;
  private basketSource = new BehaviorSubject<IBasket>(null);
  basket$ = this.basketSource.asObservable();

  constructor(private http: HttpClient) { }

  getBasket(id: string) {
    return this.http.get(this.baselUrl + 'basket?id=' + id)
    .pipe(
      map((basket: IBasket) => {
        this.basketSource.next(basket);
      })
    );
  }

  setBasket(basket: IBasket) {
    return this.http.post(this.baselUrl + 'basket', basket).subscribe((response: IBasket) => {
      this.basketSource.next(response);
    }, error => {
      console.log(error);
    });
  }

  getCurrentBasketValue() {
    return this.basketSource.value;
  }
}

