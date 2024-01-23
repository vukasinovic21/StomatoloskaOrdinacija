import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from '../../services/auth.service';

import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  @ViewChild('file') file: ElementRef | undefined;
  uploadProgress:number | null = null;

  constructor(private authService:AuthService, private cookie:CookieService, private router:Router) { }


  email?:any
  username?:any
  name?:any
  lastname?:any
  password?:any
  imageUrl!: File;
  ngOnInit() : void
  {
    
  }

  onChange(event:any) : void 
  { 
    this.imageUrl = <File>event.target.files[0]; 
} 

  register()
  {
    this.authService.register(this.email, this.username, this.name, this.lastname, this.password, this.imageUrl).subscribe( token =>
      {
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
    this.router.navigate(['register'])
  }
}
