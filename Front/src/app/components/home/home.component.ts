import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Stomatolog } from 'src/app/models/stomatolog';
import { StomatologService } from 'src/app/services/stomatolog.service';
//import * as bootstrap from "bootstrap";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  constructor(private router:Router, private dentistService:StomatologService, private cookie:CookieService) {}
  title = 'Ordinacija';

  logged ?: Boolean = false
  dentists?: Stomatolog[] = []
  dentist?: Stomatolog


  ngOnInit(): void 
  {
    this.getDentists();
    this.funkc();
  }

  getDentists()
  {
    this.dentistService.getAllDentists().subscribe 
    ({
        next: (res) =>{
          this.dentists = res;
        },
        error: (error) => {
          console.log(error);
        }
      })
  }

  funkc()
  {
    if(this.cookie.check("token"))
    this.logged = true;
  }
  

  logout()
  {
    if(this.cookie.check("token"))
    {
      this.cookie.delete("token");
      this.logged = false;
      this.router.navigate(['login'])
    }
  }

  dentistDetails(dentist:any)
  {
    this.router.navigate(['stomatolog/', dentist._id])
  }

  
}