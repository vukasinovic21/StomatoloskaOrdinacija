import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { NoLoggedGuard } from './guards/no-logged.guard';
import { IsLoggedGuard } from './guards/is-logged.guard';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { StomatologComponent } from './components/stomatolog/stomatolog.component';
import { PregledComponent } from './components/pregled/pregled.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { AdminLogged } from './guards/admin-logged-guard';

const routes: Routes = 
[
  {
    path:"login",
    component:LoginComponent,
    canActivate:[NoLoggedGuard], //moze da se pristupi i ako nije ulogovan korisnik ali ne moze ako je ulogovan
  },
  {
    path:"register",
    component:RegisterComponent,
    canActivate:[NoLoggedGuard], //moze da se pristupi i ako nije ulogovan korisnik ali ne moze ako je ulogovan
  },
  {
    path:"home",
    component:HomeComponent,
    //canActivate:[IsLoggedGuard], // ne moze da pristupi ako nije ulogovan korisnik
    children:
    [
      {path:"#dentists",component:HomeComponent},
    ]
  },
  {
    path:"stomatolog/:id",
    component:StomatologComponent,
    //canActivate:[IsLoggedGuard],
  },
  {
    path:"pregled/:id",
    component:PregledComponent,
    //canActivate:[NoLoggedGuard],
  },
  {
    path:"forgotPassword",
    component:ForgotPasswordComponent,
    canActivate:[NoLoggedGuard], //moze da se pristupi i ako nije ulogovan korisnik ali ne moze ako je ulogovan
  },
  {
    path:"**",
    component:HomeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
