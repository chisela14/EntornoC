import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    declarations: [
        ListadoComponent
    ],
    // vamos a usar este componente en varios módulos
    exports: [
        ListadoComponent
    ],
    imports: [
        CommonModule
    ]
})

export class AlumnosModule {}