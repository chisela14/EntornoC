import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../interfaces/user.interface'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  //https://soka.gitlab.io/angular/otros/json-server/json-server/

  private url:string = "http://localhost:3000/users/";

  constructor(private http:HttpClient) { }


  getUsers():Observable<User[]>{
    return this.http.get<User[]>(this.url);
  }

  addUser(name:string, email:string){
    const headers = {'Content-Type': "application/json"}
    this.http.post(`${this.url}`, {"name":name, "email": email}, {headers: headers})
    .subscribe((resp)=> console.log(resp));
  }
}
