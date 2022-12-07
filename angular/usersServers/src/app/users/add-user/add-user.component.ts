import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html'
})
export class AddUserComponent implements OnInit {

  constructor(private userService: UsersService) { }
  ngOnInit(): void {
  }

  name:string = "";
  email:string = "";

  add(){
    this.userService.addUser(this.name, this.email);
  }

}
