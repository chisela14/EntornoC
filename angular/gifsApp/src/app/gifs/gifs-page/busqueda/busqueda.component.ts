import { Component, OnInit } from '@angular/core';
import { GifsService } from '../../services/gifs-service.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['../../../app.component.css']
})
export class BusquedaComponent implements OnInit {

  constructor(gifsService:GifsService) { }

  ngOnInit(): void {
  }

}
