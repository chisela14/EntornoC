import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Country } from '../interfaces/searchResponse.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private url:string = "https://restcountries.com/v3.1/name";

  public results:Country[] = [];

  constructor(private http:HttpClient) { }

  searchCountries(query:string){
    const params = new HttpParams()
    .set("q", query);

    this.http.get<Country>(this.url, {params})
    .subscribe((resp)=> this.results)
  }
  

}
