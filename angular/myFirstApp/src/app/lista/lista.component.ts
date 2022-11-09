import { Component } from "@angular/core";

@Component({
    selector: 'app-lista',
    templateUrl: './lista.component.html',
    styleUrls: ['./lista.component.css']
})
export class ListaComponent{
    compra = [
        {element:'cerveza', quantity:100},
        {element:'agua', quantity:6},
        {element:'patatas', quantity:20}
    ]
}