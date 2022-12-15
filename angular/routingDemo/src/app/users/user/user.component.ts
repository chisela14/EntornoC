import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from '../../interfaces/user.interface';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user!:User;
  paramsSubscription!: Subscription;

  constructor(private route: ActivatedRoute) { }

  //params de ActivatedRoute es un observable, no es lo mismo que snapshot.params

  // (property) ActivatedRouteSnapshot.params: Params
  // The matrix parameters scoped to this route.
    // You can compute all params (or data) in the router state or to get params outside of an 
    // activated component by traversing the RouterState tree.

  // (property) ActivatedRoute.params: Observable<Params>
  // An observable of the matrix parameters scoped to this route.


  //snapshot está bien para recuperar datos en el momento en el que instanciamos
  //para reaccionar a lo demás debemos usar un Observable
  ngOnInit() {
    this.user = {
    id: this.route.snapshot.params['id'],
    name: this.route.snapshot.params['name']
    }

    this.paramsSubscription = this.route.params
    .subscribe((updatedParams) => {
      this.user.id = updatedParams['id'];
      this.user.name = updatedParams['name'];
      }
    );
  }

  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
    }
}
