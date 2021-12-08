import {Component, OnInit} from '@angular/core';
import {ApiService} from "../services/api.service";
import {Comic} from "../models/comic";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  comics: Array<Comic>;
  filteredComics: Array<Comic>;
  loaded = false;
  searchInput = '';
  options: string[] = [];

  constructor(private apiService: ApiService) {
    this.comics = [];
    this.filteredComics = [];
  }

  ngOnInit() {
    this.apiService.getComics().subscribe(comics => {
      this.comics = JSON.parse(JSON.stringify(comics.results));
      this.filteredComics = JSON.parse(JSON.stringify(comics.results));
      this.loaded = true;
    });
  }

  search() {
    if(this.searchInput === '') {
      this.filteredComics = this.comics;
    }
    else {
      this.filteredComics = this.comics.filter((comic) => (comic.name && comic.name.includes(this.searchInput))
          || comic.issue_number.toString() === this.searchInput)
    }

  }

}
