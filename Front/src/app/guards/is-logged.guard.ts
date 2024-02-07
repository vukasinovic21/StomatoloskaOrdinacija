import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class IsLoggedGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router, private cookie:CookieService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree 
    {
      if(this.cookie.check("token"))
      {
        this.authService.validate().subscribe({next: (res) => {
          return true;
        }, error: (error) => {
          this.router.navigate(['login']);
        }})
        return true;
      }
      else 
      {
        this.router.navigate(['login']);
        return false
      }
    }
  
}
