import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  constructor() { }

  private _historial:String[] = []

  get historial():String[]{
    return[...this._historial]
  }

  buscarGifs(query:String){
    this._historial.push(query)
  }

}
//el nombre de este archivo esta bien?
