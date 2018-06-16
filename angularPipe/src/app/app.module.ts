import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppComponent } from './app.component';

import localeEs from '@angular/common/locales/es'
import {registerLocaleData } from '@angular/common'
import {capitalizePipe} from './pipes/capitalizado.pipe';
import { DomSecurePipe } from './pipes/dom-secure.pipe'
registerLocaleData(localeEs)

@NgModule({
  declarations: [
    AppComponent,
    capitalizePipe,
    DomSecurePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [{provide: LOCALE_ID, useValue: 'es'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
