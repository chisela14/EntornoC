import { Injectable } from '@angular/core'
import { HttpClient, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Pokemon } from '../interfaces/pokemon.interface'
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  url:string = "http://localhost:3000/pokemons"

  constructor(private http:HttpClient, private router:Router) { }

  getPokemons():Observable<Pokemon[]>{
    return this.http.get<Pokemon[]>(this.url);
  }

  searchPokemons(query:string):Observable<Pokemon[]>{
    const params = new HttpParams()
    .set("q", query)

    return this.http.get<Pokemon[]>(`${this.url}/`,{params});
  }

  getPokemon(id:number):Observable<Pokemon>{
    return this.http.get<Pokemon>(`${this.url}/${id}`)
  }

  editPokemon(pokemon:Pokemon){
    const headers = {'Content-Type': "application/json"}
    let name = pokemon.name.english.trim();
    this.http.put(`${this.url}`, 
    {"name[english]":name, "base[HP]": pokemon.base.HP, "base[Attack]": pokemon.base.Attack,
    "base[Deffense]": pokemon.base.Defense, "base['Sp. Attack']": pokemon.base['Sp. Attack'],
    "base['Sp. Defense']": pokemon.base['Sp. Defense'], "base[Speed]": pokemon.base.Speed},
    {headers: headers})
      .subscribe({next: ()=> this.router.navigate(["/"])});
    
  }
}
