import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PorCapitalComponent } from './pages/porCapital/por-capital.component';
import { PorPaisComponent } from './pages/porPais/por-pais.component';
import { PorRegionComponent } from './pages/porRegion/por-region.component';
import { VerPaisComponent } from './pages/verPais/ver-pais.component';



@NgModule({
  declarations: [
    PorCapitalComponent,
    PorPaisComponent,
    PorRegionComponent,
    VerPaisComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PaisModule { }
