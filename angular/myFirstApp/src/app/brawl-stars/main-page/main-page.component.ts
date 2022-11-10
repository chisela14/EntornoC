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

  characters:Character[] = [
    {name:"Shelly", health:3600},
    {name:"Nita", health:980},
    {name:"Colt", health:2800}
  ]
}
