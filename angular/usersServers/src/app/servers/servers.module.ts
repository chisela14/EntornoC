import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServersComponent } from './servers/servers.component';
import { ServerComponent } from './server/server.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ServersComponent,
    ServerComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    ServersComponent
  ]
})
export class ServersModule { }
