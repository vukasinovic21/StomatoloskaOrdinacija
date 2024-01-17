import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { NoLoggedGuard } from './guards/no-logged.guard';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';

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
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
