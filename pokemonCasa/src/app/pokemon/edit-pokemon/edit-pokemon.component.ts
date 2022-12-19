import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonService } from '../../services/pokemon.service';
import { Pokemon } from '../../interfaces/pokemon.interface';

@Component({
  selector: 'app-edit-pokemon',
  templateUrl: './edit-pokemon.component.html'
})
export class EditPokemonComponent implements OnInit {

  constructor(private route:ActivatedRoute, private pokemonService:PokemonService, private router:Router) { }

  pokemon!:Pokemon;
  error:boolean = false;
  code:number = 0;
  ngOnInit(): void {
    this.code = this.route.snapshot.params['id'];
    this.pokemonService.getPokemon(this.code)
    .subscribe({
      next:(resp)=>{
        this.pokemon = resp;
      },
      error: (err)=>{
        this.error = true;
      }
    })
  }

  edit(){
    this.pokemonService.editPokemon(this.pokemon);
  }

}
