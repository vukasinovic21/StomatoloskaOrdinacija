import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Stomatolog } from 'src/app/models/stomatolog';
import { StomatologService } from 'src/app/services/stomatolog.service';

@Component({
  selector: 'app-stomatolog',
  templateUrl: './stomatolog.component.html',
  styleUrls: ['./stomatolog.component.css']
})
export class StomatologComponent 
{

  constructor(private activatedRoute: ActivatedRoute, private dentistService: StomatologService) {}

  dentist!: Stomatolog;
  id!: string;

  ngOnInit(): void
  {
    this.activatedRoute.params.subscribe((params) => {
      console.log(params["id"]);

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
  
}
