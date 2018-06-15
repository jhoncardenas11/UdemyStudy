
import { RouterModule, Routes} from '@angular/router';
import { Component } from '@angular/core';
import {HomeComponent} from './components/home/home.component';
import {AboutComponent} from './components/about/about.component';
import {HeoresComponent} from './components/heores/heores.component';
import {HeroeComponent} from './components/heroe/heroe.component'

const app_routes: Routes = [
  {path: 'home', component: HomeComponent },
  {path: 'about', component: AboutComponent },
  {path: 'heroes/:validatorSearch', component: HeoresComponent },
  {path: 'heroe/:id', component: HeroeComponent },
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
]

export const app_routing = RouterModule.forRoot(app_routes, {useHash: true})
