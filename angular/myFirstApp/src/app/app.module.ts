import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Contador } from './contador/contador.component';
import { ListaComponent } from './lista/lista.component';
import { AlumnosModule } from './alumnos/alumnos.module';
import { BrawlStarsModule } from './brawl-stars/brawl-stars.module';

@NgModule({
  declarations: [
    AppComponent,
    Contador,
    ListaComponent
  ],
  imports: [
    BrowserModule,
    AlumnosModule,
    BrawlStarsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
