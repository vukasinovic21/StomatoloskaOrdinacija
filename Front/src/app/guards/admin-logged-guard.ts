import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { CookieService } from 'ngx-cookie-service';
import { jwtDecode } from "jwt-decode";
import { StomatologService } from '../services/stomatolog.service';
import { Stomatolog } from '../models/stomatolog';

@Injectable({
  providedIn: 'root'
})
export class AdminLogged implements CanActivate {

  constructor(private authService: AuthService, private router: Router, private cookie:CookieService, private dentistService: StomatologService ) {}
  dentist?: Stomatolog;
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree 
    {
      if(this.cookie.check("token"))
      {
        const tokenInfo = this.getDecodedAccessToken(this.cookie.get("token"));
        const userId = tokenInfo._id;
        this.getDentist(userId);
        /*this.dentistService.getDentistById(userId).subscribe(res => 
        {
            this.dentist = res;
        })*/
        /*if(this.dentist.username == "admin")
            return true
        else
            this.router.navigate(['login']);*/
        console.log(userId); //pokazuje
        console.log(this.dentist); //undefined
        return true;
      }
      else 
      {
        this.router.navigate(['login']);
        return false
      }
    }
  
    getDecodedAccessToken(token: string): any 
    {
        try
        {
            return jwtDecode(token);
        } 
        catch(Error) 
        {
            return null;
        }
    }

    getDentist(id:any)
    {
        this.dentistService.getDentistById(id).subscribe(res => 
        {
            this.dentist = res;
            console.log(this.dentist); //pokazuje
        })
    }

}


