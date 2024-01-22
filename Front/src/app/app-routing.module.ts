import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { NoLoggedGuard } from './guards/no-logged.guard';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { StomatologComponent } from './components/stomatolog/stomatolog.component';
import { PregledComponent } from './components/pregled/pregled.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';

const routes: Routes = 
[
  {
    path:"login",
    component:LoginComponent,
    //canActivate:[NoLoggedGuard],
  },
  {
    path:"register",
    component:RegisterComponent,
    //canActivate:[NoLoggedGuard],
  },
  {
    path:"home",
    component:HomeComponent,
    //canActivate:[NoLoggedGuard],
    children:
    [
      {path:"#page-top",component:HomeComponent},
    ]
  },
  {
    path:"stomatolog/:id",
    component:StomatologComponent,
    //canActivate:[NoLoggedGuard],
  },
  {
    path:"pregled/:id",
    component:PregledComponent,
    //canActivate:[NoLoggedGuard],
  },
  {
    path:"forgotPassword",
    component:ForgotPasswordComponent,
    //canActivate:[NoLoggedGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
