import { Injectable } from '@angular/core';
import { Pregled } from '../models/pregled';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../environments/environment';

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
}
