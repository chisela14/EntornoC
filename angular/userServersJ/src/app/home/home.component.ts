import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  constructor(private authService:AuthService, private router:Router) { }

  ngOnInit(): void {
    localStorage.setItem("login", "false");
    console.log(localStorage.getItem("login"));
  }

  user:string="";
  password:string="";

  checkLogin(){
    this.authService.checkUser(this.user, this.password);
  }

  //logged:boolean = this.authService.loggedIn;
  logged:boolean|null = JSON.parse(localStorage.getItem("login"));

  onlogout(){
    this.authService.logout();
    this.router.navigate(['/']);
  }

}
