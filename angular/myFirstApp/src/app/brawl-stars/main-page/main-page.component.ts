import { Component } from '@angular/core';
import { Character } from '../interfaces/character';
// import { BSService } from '../services/brawl-stars.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css', '../character/character.component.css']
})
export class MainPageComponent  {
  // //guarda los personajes de forma centralizada, no hace falta enviarla de padres a hijos
  // personajes:Character[]; //hace falta declarar la propiedad
  // constructor(bsService:BSService){
  //   console.log('Constructor main page')
  //   this.personajes = bsService.personajes;
  // }

  // nuevo:Character = {name:"Gabi", health:1500}

  // annadir(character:Character){
  //   this.personajes.push({...character});//{hace una copia}
  // }

  constructor() { 
  }

  nuevo:Character = {name:"Gabi", health:1500}
}
