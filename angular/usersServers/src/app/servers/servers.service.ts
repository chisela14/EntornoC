import { Injectable } from '@angular/core';
import { Server } from '../interfaces/server.interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServersService {
  servers = [
    {
      id: 1,
      name: 'Productionserver',
      status: 'online'
    },
    {
      id: 2,
      name: 'Testserver',
      status: 'offline'
    },
    {
      id: 3,
      name: 'Devserver',
      status: 'offline'
    }
  ]

  constructor() { }

  getServer(id:string){
    return this.servers[parseInt(id)-1]
  }
}
