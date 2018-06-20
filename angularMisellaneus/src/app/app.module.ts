import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DngStyleComponent } from './components/dng-style/dng-style.component';
import { ClasesComponent } from './components/clases/clases.component';
import { RepasoDirective } from './directives/repaso.directive';

@NgModule({
  declarations: [
    AppComponent,
    DngStyleComponent,
    ClasesComponent,
    RepasoDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
