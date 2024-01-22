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
  pregledi2?: Pregled[] = []
  godina!: number
  mesec!: number

  ngOnInit(): void
  {
    this.activatedRoute.params.subscribe((params) => {
      this.id = params["id"];});
    this.getDentist();
    this.getAllPregleds();
    //this.pregledi?.sort((a,b) => a.datum - b.datum)//treba mi nesto sto moze da poredi string ili date i da ga sortiram po datumima
  }

  getDentist()
  {
    this.dentistService.getDentistById(this.id).subscribe({next: (res) => {
      //console.log("DENTIST: "+this.id);
      this.dentist = res;
      this.staz();
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

  zakaziPregled(id:any)
  {
    this.router.navigate(['pregled/'+id]);
  }

  staz()
  {
    let currentDate = new Date();
    let datum = new Date(this.dentist.datumZaposlenja);
    //console.log(currentDate);
    //console.log(this.dentist.datumZaposlenja);
    this.godina = Math.round(Math.floor((Date.UTC(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate()) - Date.UTC(datum.getFullYear(), datum.getMonth(), datum.getDate()) ) /(1000 * 60 * 60 * 24))/365*10)/10;
    this.mesec = Math.round(Math.floor((Date.UTC(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate()) - Date.UTC(datum.getFullYear(), datum.getMonth(), datum.getDate()) ) /(1000 * 60 * 60 * 24))/30.417*10)/10;
  }
}
