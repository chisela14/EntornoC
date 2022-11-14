import { Component, Input, OnInit } from '@angular/core';
import { Character } from '../interfaces/character';

@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
  }

  @Input() addCharacter(){}
  @Input() new:Character = {name:"", health:0}
}
