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

  register(email:any, username:any, name:any, lastname:any, password:any, imageUrl:File) : Observable<Token>
  {
    const formData = new FormData();
    const file: HTMLInputElement | null = document.getElementById('file') as HTMLInputElement;

    formData.append('email', email);
    formData.append('username', username);
    formData.append('name', name);
    formData.append('lastname', lastname);
    formData.append('password', password);
    if(file && file.files && file.files.length > 0)
    {
      formData.append('file', file.files[0]);
    }

    return this.httpClient.post<Token>(this.backUrl + "register",formData);
  }

  updatePassword(email:any, username:any, password:string, password2:string) : Observable<Token>
  {
    return this.httpClient.put<Token>(this.backUrl + "forgotPassword",
    {
      "email":email,
      "username":username,
      "password":password,
      "password2":password2,
    });
  }

  validate()
  {
    
  }
}
