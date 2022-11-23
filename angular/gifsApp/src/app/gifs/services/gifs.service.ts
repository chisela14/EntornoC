import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Gif, GifsSearchResponse } from '../interfaces/searchResponse.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private api_key:string = "aH2XSvGGFMXE2blRH2teLk1zi10TFsuz";
  private url:string = "https://api.giphy.com/v1/gifs/search";
  private _history:string[] = [];

  //importante public
  public results:Gif[] = [];

  get history():string[]{
    return[...this._history]
  }

  constructor( private http:HttpClient) { 
    //! al final significa que me hago responsable de que sé que puede dar nulo, con || [] le doy alternativa si diera error
    this._history = JSON.parse(localStorage.getItem("history")!) || [];
  }

  buscarGifs(query:string):void{
    let clean = query.trim().toLowerCase();
    if(clean !== "" && !this._history.includes(clean)){
      this._history.unshift(query)
      this._history = this._history.splice(0,10);

      localStorage.setItem("history", JSON.stringify(this._history))
    }

    const params = new HttpParams() //no se pueden modificar, se inician al crearlo
    .set("api_key", this.api_key)
    .set("q", query)
    .set("limit", "10"); //se puede utilizar porque es un parámetro de la api

    //OJO LO SIGUIENTE NO ESTABLECE UN PARÁMETRO NUEVO, DEVUELVE UN 
    //HTTP PARAM con los atributos que le pases
    //params.set()

    // <GifsSearchResponse> tipar la respuesta a la interfaz que habíamos creado con https://quicktype.io/
    this.http.get<GifsSearchResponse>(this.url, {params})
    .subscribe((resp) => this.results = resp.data);
    

  }


}

