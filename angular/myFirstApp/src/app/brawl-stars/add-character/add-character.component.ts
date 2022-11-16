import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../interfaces/character';
import { BSService } from '../services/brawl-stars.service';

@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {
  constructor(private bsService:BSService) { //inicializa la propiedad como privada para que la detecte
    console.log('Constructor add character')
  }
 
  @Input() new:Character = {name:"", health:0} //el input se hace en este componente
  // @Output() onNewCharacter:EventEmitter<Character> = new EventEmitter();
  
  addCharacter(){ //se realiza cuando se envía el formulario
    // this.onNewCharacter.emit(this.new);
    this.bsService.annadir({...this.new});
  }
}
