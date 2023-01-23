import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServersComponent } from './servers/servers.component';
import { ServerComponent } from './server/server.component';
import { RouterModule } from '@angular/router';
import { EditServerComponent } from './edit-server/edit-server.component';
import { FormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { AuthInterceptorService } from '../auth-interceptor.service';



@NgModule({
  declarations: [
    ServersComponent,
    ServerComponent,
    EditServerComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    ServersComponent
  ],
  providers: [CookieService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
      }]
})
export class ServersModule { }
