import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from './shared/shared.module';
import { UsersModule } from './users/users.module';
import { ServersModule } from './servers/servers.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    UsersModule,
    ServersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
