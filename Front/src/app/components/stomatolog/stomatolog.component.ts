import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pregled } from 'src/app/models/pregled';
import { Stomatolog } from 'src/app/models/stomatolog';
import { PregledService } from 'src/app/services/pregled.service';
import { StomatologService } from 'src/app/services/stomatolog.service';

@Component({
  selector: 'app-stomatolog',
  templateUrl: './stomatolog.component.html',
  styleUrls: ['./stomatolog.component.css']
})
export class StomatologComponent 
{

  constructor(private activatedRoute: ActivatedRoute, private dentistService: StomatologService, private pregledService:PregledService) {}

  dentist!: Stomatolog;
  id!: string;
  pregledi?:Pregled[] = []

  ngOnInit(): void
  {
    this.activatedRoute.params.subscribe((params) => {
      this.id = params["id"];
      this.getDentist();
    });   
  }

  getDentist(): void 
  {
    this.dentistService.getDentistById(this.id).subscribe({next: (res) => {
      this.dentist = res;
    }, error: (error) => {

    }})
  }

  getAllPregleds()
  {

  }
  
}
