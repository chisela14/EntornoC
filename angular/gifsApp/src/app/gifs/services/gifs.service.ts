import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Gif } from '../interfaces/searchResponse.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  constructor( private http:HttpClient) { }

  private _history:string[] = [];
  private api_key:string = "aH2XSvGGFMXE2blRH2teLk1zi10TFsuz";
  private url:string = "https://api.giphy.com/v1/gifs/search";
  private results:Gif[] = [];

  get history():string[]{
    return[...this._history]
  }

  buscarGifs(query:string):void{
    let clean = query.trim().toLowerCase();
    if(clean !== "" && !this._history.includes(clean)){
      this._history.unshift(query)
      this._history = this._history.splice(0,10);
    }

    const params = new HttpParams()
    .set("api_key", this.api_key)
    .set("q", query)
    this.http.get(this.url, {params})
    //.subscribe((resp) => this.results = resp.data);
    

  }


}

