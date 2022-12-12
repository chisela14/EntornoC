import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/user.interface'
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  //https://soka.gitlab.io/angular/otros/json-server/json-server/

  private url:string = "http://localhost:3000/users/";

  constructor(private http:HttpClient, private router:Router) { }


  getUsers():Observable<User[]>{
    return this.http.get<User[]>(this.url);
  }

  addUser(name:string, email:string){
    const headers = {'Content-Type': "application/json"}
    name.trim();
    email.trim();
    if(name != "" && email != ""){
      this.http.post(`${this.url}`, {"name":name, "email": email}, {headers: headers})
      .subscribe({next: ()=> this.router.navigate(["users"])});//(resp)=> console.log(resp)
    }else{
      this.router.navigate(["error"]);
    }
  }

  result!:User;

  getUser(id:string):Observable<User>{
    return this.http.get<User>(`${this.url}${id}`)
  }
  
}
