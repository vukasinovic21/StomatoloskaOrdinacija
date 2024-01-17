import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{

  constructor(private router:Router, private cookie:CookieService) {}
  title = 'Ordinacija';

  logout()
  {
    if(this.cookie.check("token"))
    {
      this.cookie.delete("token");
      this.router.navigate(['login'])
    }
  }
}
