import { Injectable } from '@angular/core';
import { Stomatolog } from '../models/stomatolog';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StomatologService {

  constructor(private httpClient: HttpClient, private router:Router ) { }

  private backUrl= environment.backUrl

  getAllDentists() : Observable<Stomatolog[]>
  {
    return this.httpClient.get<Stomatolog[]>(this.backUrl + "stom/")
  }
}
