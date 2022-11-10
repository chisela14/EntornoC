import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
  }

  alumnos:string[] = ["Pilar","Vicente", "Sergio", "Javier"]
  aprobados:string[] = [];
  aprobar(): void{
    if(this.alumnos.length != 0){
      this.aprobados.push(this.alumnos.pop() || "");
    }
  }
}
