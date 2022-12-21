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

  //un solo método para conseguir pokemons con búsqueda y sin
  // getPokemons(search:string=''): Observable<Pokemon[]>{
  //   if (search === ''){
  //     return this.http.get<Pokemon[]>(this.url);
  //   }
  //   else{
  //     return this.http.get<Pokemon[]>(`${this.url}?q=${search}`)
  //   }
  // }

  getPokemons():Observable<Pokemon[]>{
    return this.http.get<Pokemon[]>(this.url);
  }

  searchPokemons(query:string):Observable<Pokemon[]>{
    const params = new HttpParams() //realmente para un solo parámetro, que existe de normal, no hacía falta = ${this.url}?q=${search}
    .set("q", query)

    return this.http.get<Pokemon[]>(`${this.url}`,{params});
  }

  getPokemon(id:number):Observable<Pokemon>{
    return this.http.get<Pokemon>(`${this.url}${id}`)
  }

  editPokemon(pokemon:Pokemon){
    const headers = {'Content-Type': "application/json"}
    const id = pokemon.id;
    this.http.put(`${this.url}${id}`, pokemon, {headers: headers})
      .subscribe({next: ()=> {alert("Los cambios se han guardado correctamente"), this.router.navigate(['/'])}});
    
  }
  //sintaxis del body entero original
  //let name = pokemon.name.english.trim();
  // {"name":{"english":name}, "base":{"HP":pokemon.base.HP, "Attack":pokemon.base.Attack, 
  //   "Defense": pokemon.base.Defense, "Sp. Attack": pokemon.base['Sp. Attack'],
  //   "Sp. Defense": pokemon.base['Sp. Defense'], "Speed": pokemon.base.Speed}}
}
