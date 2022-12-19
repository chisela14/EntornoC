import { Injectable } from '@angular/core'
import { HttpClient, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Pokemon } from '../interfaces/pokemon.interface'
import { ActivatedRoute, Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  url:string = "http://localhost:3000/pokemons/"

  constructor(private http:HttpClient, private router:Router, private route:ActivatedRoute) { }

  getPokemons():Observable<Pokemon[]>{
    return this.http.get<Pokemon[]>(this.url);
  }

  searchPokemons(query:string):Observable<Pokemon[]>{
    const params = new HttpParams()
    .set("q", query)

    return this.http.get<Pokemon[]>(`${this.url}`,{params});
  }

  getPokemon(id:number):Observable<Pokemon>{
    return this.http.get<Pokemon>(`${this.url}${id}`)
  }

  editPokemon(pokemon:Pokemon){
    const headers = {'Content-Type': "application/json"}
    const id = pokemon.id;
    let name = pokemon.name.english.trim();
    //aun haciendo patch me elimina los idiomas que no introduzca
    this.http.patch(`${this.url}${id}`, 
    {"name":{"english":name}, "base":{"HP":pokemon.base.HP, "Attack":pokemon.base.Attack, 
    "Defense": pokemon.base.Defense, "Sp. Attack": pokemon.base['Sp. Attack'],
    "Sp. Defense": pokemon.base['Sp. Defense'], "Speed": pokemon.base.Speed}},
    {headers: headers})
      .subscribe({next: ()=> alert("Los cambios se han guardado correctamente")});
    
  }
}
