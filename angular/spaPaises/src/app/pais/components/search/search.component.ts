import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
  }
  search(){
    this.paisService.searchCountries(this.query);
  }

}
