
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { NavBarComponent } from './Components/navbar/navbar.component';
import { JumbotronComponent } from './Components/jumbotron/jumbotron.component';


import { HomeComponent } from './pages/home.component';
import { AboutComponent } from './pages/about.component';
import { routing } from './app.routing';





@NgModule({
  imports:      [ BrowserModule, routing ],
  declarations: [ AppComponent, 
                  NavBarComponent,
                  JumbotronComponent,
                  HomeComponent, 
                  AboutComponent,
                  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
