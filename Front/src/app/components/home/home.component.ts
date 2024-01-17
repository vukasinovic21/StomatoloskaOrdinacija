import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private router:Router, private cookie:CookieService) {}
  title = 'Ordinacija';

  logged ?: Boolean = false
  

  funkc()//moglo bi onInit da se proverava ?
  {
    if(this.cookie.check("token"))
    this.logged = true;
  }
  

  logout()
  {
    if(this.cookie.check("token"))
    {
      this.cookie.delete("token");
      this.router.navigate(['login'])
    }
  }
}
