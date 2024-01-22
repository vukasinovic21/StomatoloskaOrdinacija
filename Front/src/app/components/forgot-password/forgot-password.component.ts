import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(private authService:AuthService, private cookie:CookieService, private router:Router) { }


  email?:any
  username?:any
  password!:string
  password2!:string

  ngOnInit(): void 
  {

  }


  home()
  {
    this.router.navigate(['home'])
  }

  updatePassword()
  {
    if(this.password == this.password2)
    {
      this.authService.updatePassword(this.email, this.username, this.password, this.password2).subscribe( token =>
        {
          //this.cookie.set("token", token.token)
          this.router.navigate(['login'])
        })
    }
    else
      console.log(this.password +" != "+ this.password2);
  }

}
