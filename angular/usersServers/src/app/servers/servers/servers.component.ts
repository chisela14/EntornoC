import { Component, OnInit } from '@angular/core';
import { ServersService } from '../servers.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html'
})
export class ServersComponent implements OnInit {

  constructor(private serversService: ServersService) { }

  ngOnInit(): void {
  }
  
  get servers(){
    return this.serversService.servers;
  }
}
