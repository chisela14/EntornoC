import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
  }

  nuevo:Character = {name:"", health:0}

  personajes:Character[] = [
    {name:"Shelly", health:3600},
    {name:"Jessie", health:3000},
    {name:"Colt", health:2800},
    {name:"Shandy", health:1001},
    {name:"Nita", health:1000},
    {name:"Spike", health:980}
  ]

  annadir(){
    this.personajes.push(this.nuevo);
    this.nuevo = {name:"", health:0}
  }

}
