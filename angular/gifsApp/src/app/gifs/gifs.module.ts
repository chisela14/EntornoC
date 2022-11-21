import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifsPageComponent } from './gifs-page/gifs-page.component';
import { GifsService } from './services/gifs.service';
import { BusquedaComponent } from './gifs-page/busqueda/busqueda.component';
import { ResultadosComponent } from './gifs-page/resultados/resultados.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    GifsPageComponent,
    BusquedaComponent,
    ResultadosComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    GifsPageComponent
  ],
  providers: [
    GifsService
  ]
})
export class GifsModule { }
