import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/interfaces/pokemon.interface';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  constructor(private pokemonService:PokemonService) { }

  ngOnInit(): void {
    
  }

  oculto:boolean = true;
  showSearch(){
    //!this.oculto niega el valor que tenga
    if(this.oculto){
      this.oculto = false;
    }else{
      this.oculto = true;
    }
  }

  pokemons:Pokemon[] = [];
  error:boolean = false;
 
  searchPokemons(query:string){
    this.pokemonService.searchPokemons(query)
    .subscribe({
      next:(resp)=>{
        this.pokemons = resp
      },
      error: ()=>{
        this.error = true,
        this.pokemons = []
      }
    })
  }
}
