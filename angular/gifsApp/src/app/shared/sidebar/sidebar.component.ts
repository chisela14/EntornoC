import { Component, OnInit } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs-service.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['../../app.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(gifsService:GifsService) { }

  ngOnInit(): void {
  }

}
