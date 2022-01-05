import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BasketService } from './basket/basket.service';
import { User } from './_models/user';
import { AccountService } from './_services/account.service';
import { PresenceService } from './_services/presence.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Shop online';
  users: any;

  constructor(private accountService: AccountService, private presence: PresenceService,
              private basketService: BasketService){}
  ngOnInit(){
    this.setCurrentUser();
    this.getBasketId();
  }

  setCurrentUser() {
    const user: User = JSON.parse(localStorage.getItem('user'));
    if (user) {
      this.accountService.setCurrentUser(user);
      this.presence.createHubConnection(user);

    }
  }
  getBasketId() {
    const basketId = localStorage.getItem('basket_id');
    if (basketId) {
    this.basketService.getBasket(basketId).subscribe(() => {
      console.log('initialised basket');
    }, error => {
      console.log(error);
    }
    );
  }
}
}

