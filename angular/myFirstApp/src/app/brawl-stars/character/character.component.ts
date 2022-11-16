import { Component, Input } from '@angular/core';
import { Character } from '../interfaces/character';
import { BSService } from '../services/brawl-stars.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css', '../../app.component.css']
})
export class CharacterComponent {
  // constructor() { }
  // @Input() characters:Character[] = []

  constructor(private bsService:BSService) { 
  
  }

  get characters():Character[]{
    return this.bsService.personajes;
  }

  delete(name:String){
    this.bsService.borrar({...name});
  }

}
