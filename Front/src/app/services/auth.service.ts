import { HttpClient } from '@angular/common/http';
import { Token } from '../models/token';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient:HttpClient) { }

  private backUrl = environment.backUrl + "auth/"

  login(username:any, password:any) : Observable<Token>
  {
    return this.httpClient.post<Token>(this.backUrl + "login",
    {
      "username":username,
      "password":password
    });
  }

  register(email:any, username:any, name:any, lastname:any, password:any) : Observable<Token>
  {
    return this.httpClient.post<Token>(this.backUrl + "register",
    {
      "email":email,
      "username":username,
      "name":name,
      "lastname":lastname,
      "password":password
    });
  }

  validate()
  {
    
  }
}
