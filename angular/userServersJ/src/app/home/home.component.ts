import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  constructor(private authService:AuthService) {
  }

  logged!:boolean;
  ngOnInit(): void {
    this.logged = this.authService.isAuthenticated();
  }

  user:string="";
  password:string="";

  checkLogin(){
    this.authService.login(this.user, this.password);
    this.user="";
    this.password="";
  }

  onlogout(){
    this.authService.logout();
    this.logged = false;
  }

}
