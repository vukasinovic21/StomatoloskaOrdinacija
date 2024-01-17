import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private authService:AuthService, private cookie:CookieService, private router:Router) { }


  email?:any
  username?:any
  name?:any
  lastname?:any
  password?:any


  register()
  {
    this.authService.register(this.email, this.username, this.name, this.lastname, this.password).subscribe( token =>
      {
        this.cookie.set("token", token.token)
        this.router.navigate(['home'])
      })
  }

}
