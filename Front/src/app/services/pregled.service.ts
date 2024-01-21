import { Injectable } from '@angular/core';
import { Pregled } from '../models/pregled';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../environments/environment';
import { Token } from '../models/token';

@Injectable({
  providedIn: 'root'
})
export class PregledService {

  constructor(private httpClient: HttpClient, private router:Router ) { }

  private backUrl= environment.backUrl

  getAllPregleds(id:string) : Observable<Pregled[]>
  {
    return this.httpClient.get<Pregled[]>(this.backUrl + "pregled/stom/?id="+ id);//treba uzeti sve preglede koji imaju istog stomatologa
  }

  zakazi(name:any, lastname:any, email:any, datum:any, stomatolog:any) : Observable<Token>
  {
    console.log(name, lastname, email, datum, stomatolog);
    return this.httpClient.post<Token>(this.backUrl + "pregled",
    {
      "name":name,
      "lastname":lastname,
      "email":email,
      "datum":datum,
      "stomatolog":stomatolog
    });
  }
}
