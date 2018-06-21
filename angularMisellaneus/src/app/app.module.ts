import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {app_routing} from './app.routes'

import { AppComponent } from './app.component';
import { DngStyleComponent } from './components/dng-style/dng-style.component';
import { ClasesComponent } from './components/clases/clases.component';
import { RepasoDirective } from './directives/repaso.directive';
import { HomeComponent } from './components/home/home.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { EditUserComponent } from './components/usuario/edit-user.component';
import { EditNewComponent } from './components/usuario/edit-new.component';
import { DetailComponent } from './components/usuario/detail.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    DngStyleComponent,
    ClasesComponent,
    RepasoDirective,
    HomeComponent,
    UsuarioComponent,
    EditUserComponent,
    EditNewComponent,
    DetailComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    app_routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
