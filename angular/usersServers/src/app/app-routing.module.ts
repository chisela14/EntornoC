import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServersComponent } from './servers/servers/servers.component';
import { UsersComponent } from './users/users/users.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { AddUserComponent } from './users/add-user/add-user.component';
import { UserInfoComponent } from './users/user-info/user-info.component';
import { ServerComponent } from './servers/server/server.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'servers',
    component: ServersComponent
  },
  {
    path: 'servers/:id',
    component: ServerComponent
  },
  {
    path: 'users',
    component: UsersComponent
  },
  {
    path:'addUser',
    component: AddUserComponent
  },
  {
    path: 'users/:id',
    component: UserInfoComponent
  },
  {
    path: 'error',
    component: NotFoundComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
