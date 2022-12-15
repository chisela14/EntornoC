import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServersService } from './servers.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  public servers: {id: number, name: string, status: string}[] = [];

  constructor(private serversService: ServersService,
              private router: Router) { }

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }
  //navigate no sabe la ruta en la que estás, a diferencia de routerLink, entonces da igual si usas ruta absoluta o relativa
  onReload() {
  this.router.navigate(['servers']);
  // con relativeTo si sabe de dónde viene e importa el tipo de ruta
  // this.router.navigate(['servers'], { relativeTo: this.route }); MAL /servers/servers
}

}
