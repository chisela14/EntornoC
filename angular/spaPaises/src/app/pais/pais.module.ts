import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PorCapitalComponent } from './pages/porCapital/por-capital.component';
import { PorPaisComponent } from './pages/porPais/por-pais.component';
import { PorRegionComponent } from './pages/porRegion/por-region.component';
import { VerPaisComponent } from './pages/verPais/ver-pais.component';
import { PaisService } from './services/pais.service';
import { SearchComponent } from './components/search/search.component';



@NgModule({
  declarations: [
    PorCapitalComponent,
    PorPaisComponent,
    PorRegionComponent,
    VerPaisComponent,
    SearchComponent
  ],
  imports: [
    CommonModule
  ],
  providers:[
    PaisService
  ]
})
export class PaisModule { }
