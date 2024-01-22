import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private authService:AuthService, private cookie:CookieService, private router:Router) { }

  username?:any
  password?:any

  login()
  {
    this.authService.login(this.username, this.password).subscribe(token =>
      {
        //console.log(token.token);
        this.cookie.set("token", token.token)
        this.router.navigate(['home'])
      })
  }

  home()
  {
    this.router.navigate(['home'])
  }

  forgotPassword()
  {
    this.router.navigate(['login'])//forgotPassword;
  }
}
