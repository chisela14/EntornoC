import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/interfaces/pokemon.interface';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent implements OnInit {

  constructor(private pokemonService:PokemonService) { }

  @Input() pokemons:Pokemon[] = []
  error:boolean = false;

  ngOnInit(): void {
    this.pokemonService.getPokemons()
    .subscribe({
      next:(resp)=>{
        this.pokemons = resp
      },
      error: (err)=>{
        this.error = true,
        this.pokemons = []
      }
    })
  }

  power:number = 0;

}
