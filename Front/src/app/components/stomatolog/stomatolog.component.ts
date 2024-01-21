import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pregled } from 'src/app/models/pregled';
import { Stomatolog } from 'src/app/models/stomatolog';
import { PregledService } from 'src/app/services/pregled.service';
import { StomatologService } from 'src/app/services/stomatolog.service';
import { BrowserModule } from '@angular/platform-browser'

@Component({
  selector: 'app-stomatolog',
  templateUrl: './stomatolog.component.html',
  styleUrls: ['./stomatolog.component.css']
})
export class StomatologComponent 
{

  constructor(private activatedRoute: ActivatedRoute, private dentistService: StomatologService, private pregledService:PregledService, private router:Router) {}

  dentist!: Stomatolog;
  id!: string;
  pregledi?: Pregled[] = []

  ngOnInit(): void
  {
    this.activatedRoute.params.subscribe((params) => {
      this.id = params["id"];});
      this.getDentist();
      this.getAllPregleds();
  }

  getDentist()
  {
    this.dentistService.getDentistById(this.id).subscribe({next: (res) => {
      //console.log("DENTIST: "+this.id);
      this.dentist = res;
    }, error: (error) => {
      console.log("Greska prilikom getDentist()");
    }})
  }

  getAllPregleds()
  {
    /*this.pregledService.getAllPregleds(this.id).subscribe
      ({
        next: (res) =>{
          this.pregledi = res;
          console.log(res);
        },
        error: (error) => {
          console.log(error);
        }
      })*/
      this.pregledService.getAllPregleds(this.id).subscribe( res =>
        {
          this.pregledi = res;
        })
  }

  home()
  {
    this.router.navigate(['home']);
  }
}
