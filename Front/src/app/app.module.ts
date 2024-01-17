import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { StomatoloziComponent } from './components/stomatolozi/stomatolozi.component';
import { PreglediComponent } from './components/pregledi/pregledi.component';
import { PregledComponent } from './components/pregled/pregled.component';
import { StomatologComponent } from './components/stomatolog/stomatolog.component';

@NgModule({
  declarations: [
  
    RegisterComponent,
       LoginComponent,
       HomeComponent,
       StomatoloziComponent,
       PreglediComponent,
       PregledComponent,
       StomatologComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
