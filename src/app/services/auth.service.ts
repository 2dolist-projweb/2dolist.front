import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { pipe } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

@Injectable({
    providedIn: 'root'
  })
  export class AuthService {
    baseUrl = environment.apiUrl + 'auth/';
    jwtHelper = new JwtHelperService();
    decodedToken: any;
    currentUser: User;
  
    constructor(private http: HttpClient) { }
    
    login(model: any) {
        console.log('_______________login');
      return this.http.post(this.baseUrl + 'login', model)
        .pipe(
          map((response: any) => {
            const user = response;
            if (user) {
              localStorage.setItem('token', user.access_token);
              localStorage.setItem('user', JSON.stringify(user.user));
              this.decodedToken = this.jwtHelper.decodeToken(user.token);
              this.currentUser = user.user;
            }
          })
        );
    }
  
    register(user: User) {
      return this.http.post(this.baseUrl + 'register', user);
    }
  
    loggedIn() {
      const token = localStorage.getItem('token');
      return !this.jwtHelper.isTokenExpired(token);
    }
  
  
  }

