import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../users.service';
import { User } from '../../interfaces/user.interface'

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html'
})
export class UserInfoComponent implements OnInit {

  constructor(private route:ActivatedRoute, private userService:UsersService, private router:Router) { }

  user!:User;

  ngOnInit(): void {
    this.userService.getUser(this.route.snapshot.params['id'])//id: this.route.snapshot.params['id'] recuperarlo del url
    .subscribe({
      next: (resp)=>{
        this.user = resp;
      },
      error: (err)=>{
        this.user!; 
        this.router.navigate(["error"]);
      }
    })
  }


}
