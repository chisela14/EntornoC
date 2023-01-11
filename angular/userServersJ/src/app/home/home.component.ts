import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  constructor(private authService:AuthService, private router:Router) {
    if(localStorage.getItem("login") == null){
      localStorage.setItem("login", "false");
    }
  }

  logged!:boolean;
  ngOnInit(): void {
    this.logged = JSON.parse(localStorage.getItem("login")||"false");
  }

  user:string="";
  password:string="";

  checkLogin(){
    this.authService.checkUser(this.user, this.password);
  }

  onlogout(){
    this.authService.logout();
    this.logged = false;
    this.router.navigate(['/']);
  }

}
