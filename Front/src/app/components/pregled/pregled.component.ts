import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PregledService } from 'src/app/services/pregled.service';
import { StomatologService } from 'src/app/services/stomatolog.service';

@Component({
  selector: 'app-pregled',
  templateUrl: './pregled.component.html',
  styleUrls: ['./pregled.component.css']
})
export class PregledComponent {

  constructor(private activatedRoute: ActivatedRoute, private pregledService:PregledService, private router:Router) {}

  name?:any
  lastname?:any
  email?:any
  datum?:any
  stomatolog?:any

  ngOnInit(): void
  {
    this.activatedRoute.params.subscribe((params) => {
      this.stomatolog = params["id"];});
  }

  zakazi()
  {
    this.pregledService.zakazi(this.name, this.lastname, this.email, this.datum, this.stomatolog).subscribe( token =>
    {
      this.router.navigate(['stomatolog/'+this.stomatolog]);
    });this.router.navigate(['stomatolog/'+this.stomatolog]);
  }

  back()
  {
    this.router.navigate(['stomatolog/'+this.stomatolog]);
  }
}
