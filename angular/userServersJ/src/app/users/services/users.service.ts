import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/servers/interfaces/client.interface';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  
  constructor(private http: HttpClient, private cookies:CookieService) { }

  url = 'http://localhost:8000/users';
  httpOptions = {
    headers: new HttpHeaders({ 'Authorizarion': `Bearer ${this.cookies.get('token')}` })
  };

  getUsers():Observable<User[]>{
    const httpOptions = {
      headers: new HttpHeaders().set( 'Authorization', `Bearer ${this.cookies.get('token')}`)
    };
    
    return this.http.get<User[]>(this.url, httpOptions)
  }

  getUser(id:number):Observable<User>{
    const httpOptions = {
      headers: new HttpHeaders().set( 'Authorization', `Bearer ${this.cookies.get('token')}`)
    };

    return this.http.get<User>(`${this.url}/${id}`, this.httpOptions)
  }

  getUserByEmail(email:string):Observable<User[]>{
    return this.http.get<User[]>(`http://localhost:3000/users?email=${email}`)
  }
}
