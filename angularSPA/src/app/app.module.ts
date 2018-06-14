import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//routes
import {app_routing } from './app.routes'

//Services
import {HeroesService} from './services/heroes.service'
//Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeoresComponent } from './components/heores/heores.component';
import { HeroeComponent } from './components/heroe/heroe.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeoresComponent,
    HeroeComponent
  ],
  imports: [
    BrowserModule,
    app_routing
  ],
  providers: [
    HeroesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
