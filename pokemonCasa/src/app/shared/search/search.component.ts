import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output()onSearch = new EventEmitter<string>();

  filterNom:string = ""
  search(){
    this.onSearch.emit(this.filterNom);
    this.filterNom= "";
  }
}
