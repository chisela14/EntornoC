import { Component, Input, OnInit } from '@angular/core';
import { Character } from '../interfaces/character';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
  }

  @Input() characters:Character[] = []
 

}
