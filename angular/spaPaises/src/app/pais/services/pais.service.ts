import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country } from '../interfaces/searchResponse.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private url:string = "https://restcountries.com/v3.1/name/";

  public results:Country[] = [];

  constructor(private http:HttpClient) { }

  searchCountries(query:string){

    this.http.get<Country[]>(`${this.url}${query}`)
    .subscribe((resp)=> this.results=resp)
  }
  

}
