import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }

  user:string="";
  password:string="";

  checkLogin(){
    this.authService.checkUser(this.user, this.password);
  }

  logged:boolean = this.authService.loggedIn;

}
