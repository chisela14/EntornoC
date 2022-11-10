import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/personaje';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
  }

  
  personajes:Personaje[] = [
    {name:"Shelly", health:3600},

  ]
}
