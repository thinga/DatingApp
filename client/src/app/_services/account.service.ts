import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, ReplaySubject } from 'rxjs';
import { User } from '../_models/user';
import {map} from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { PresenceService } from './presence.service';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  baseUrl = environment.apiUrl;
  private currentUserSource = new ReplaySubject<User>(1);
  currentUsers$ = this.currentUserSource.asObservable();


  constructor(private http: HttpClient, private presence: PresenceService) { }

  // tslint:disable-next-line: typedef
  login(model: any){
    return this.http.post(this.baseUrl + 'account/login', model).pipe(
      map((response: User) => {
        const user = response;
        if (user){
        this.setCurrentUser(user);
        this.presence.createHubConnection(user);
        }
      })
    );
  }

  // tslint:disable-next-line: typedef
  register(model: any){
    return this.http.post(this.baseUrl + 'account/register', model).pipe(
      map((user: User) => {
        if (user) {    
          this.setCurrentUser(user);
          this.presence.createHubConnection(user);
        }
      })
    );
  }

  // tslint:disable-next-line: typedef
  setCurrentUser(user: User){
    user.roles = [];
    const roles = this.getDecodedToken(user.token).role;
    Array.isArray(roles) ? user.roles = roles : user.roles.push(roles);

    localStorage.setItem('user', JSON.stringify(user));
    this.currentUserSource.next(user);
  }

  // tslint:disable-next-line: typedef
  logout() {
    localStorage.removeItem('user');
    this.currentUserSource.next(null);
    this.presence.stopHubConnection();
  }
  
  getDecodedToken(token){
    return JSON.parse(atob(token.split('.')[1]));
}

}
