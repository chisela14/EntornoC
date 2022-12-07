import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user.interface';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html'
})
export class UsersComponent implements OnInit {

  constructor(private userService: UsersService) { }

  error:boolean = false;
  users:User[] = [];

  ngOnInit(): void {
    this.userService.getUsers()
    .subscribe({
      next:(resp)=>{
        this.users = resp;
        this.error = false;
      },
      error:(err)=>{
        this.error = true;
        this.users = [];
      }
    })
  }

}
