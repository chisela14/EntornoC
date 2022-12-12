import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { AddUserComponent } from './add-user/add-user.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UserInfoComponent } from './user-info/user-info.component';



@NgModule({
  declarations: [
    UsersComponent,
    AddUserComponent,
    UserInfoComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports:[
    UsersComponent
  ]
})
export class UsersModule { }
