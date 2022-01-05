import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { BasketService } from 'src/app/basket/basket.service';
import { IBasket } from 'src/app/_models/basket';
import { User } from '../../_models/user';
import { AccountService } from '../../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  model: any = {};
  basket$: Observable<IBasket>;

  constructor(public accountService: AccountService, private router: Router,
              private toastr: ToastrService, private basketService: BasketService) { }

  ngOnInit(): void {
    this.basket$ = this.basketService.basket$;
    }

  login(){
   this.accountService.login(this.model).subscribe(response => {
     this.router.navigateByUrl('/members');
   }, error => {
     console.log(error);
     this.toastr.error(error.error);
   });
  }

  logout(){
    this.accountService.logout();
    this.router.navigateByUrl('/');
  }

}
