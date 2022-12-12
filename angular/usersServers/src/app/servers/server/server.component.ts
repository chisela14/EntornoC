import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})
export class ServerComponent implements OnInit {

  constructor(private route:ActivatedRoute, private serverService:ServersService, private router:Router) { }

  server:any;

  ngOnInit(): void {
    this.server = this.serverService.getServer(this.route.snapshot.params['id']);
  }

}
