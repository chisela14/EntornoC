import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  constructor(private authService:AuthService, private router:Router, private cookieService:CookieService) {
  }

  logged!:boolean;
  ngOnInit(): void {
    this.logged = this.authService.isAuthenticated();
  }

  user:string="";
  password:string="";

  checkLogin(){
    this.authService.login(this.user, this.password)
    .subscribe({
      next:()=>{this.router.navigate(['/servers'])}
    })
    this.user="";
    this.password="";
  }

  onlogout(){
    this.authService.logout();
    this.logged = false;
  }

}
