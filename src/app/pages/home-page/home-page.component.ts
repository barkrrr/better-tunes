import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})

export class HomePageComponent implements OnInit {
  feedbackEnabled = false;
  error = null;
  processing = false;
  searchQuery: string;
  results: any;
  term: string;

  constructor(
    private searchService: SearchService
  ) { }

  ngOnInit() {
  }

  submitForm(form) {
    this.error = '';
    this.feedbackEnabled = true;
    if (form.valid) {
      this.processing = true;
      this.searchService.search(this.searchQuery)
      .then(results => {
        this.results = results
        this.searchService.getStoredResults = results;
      })
      .catch((err) => {
        console.log(err)
        this.processing = false;
        this.feedbackEnabled = false;
      });
      }
    }

  sortBy(term) {  
    if (term === 'time') {
      return this.results.results.sort((a, b) => {
        if (a.trackTimeMillis > b.trackTimeMillis) return 1
        if (a.trackTimeMillis < b.trackTimeMillis) return -1
        if (a.trackTimeMillis === b.trackTimeMillis) {
          return a.trackId - b.trackId
        }
      })
    }

    if (term === 'genre') {
      return this.results.results.sort((a, b) => {
        const parsedA = a.primaryGenreName.replace(/[^A-Z0-9]/ig, "_");
        const parsedB = b.primaryGenreName.replace(/[^A-Z0-9]/ig, "_");
        
        if(parsedA > parsedB) return 1
        if(parsedA < parsedB) return -1
        if(parsedA === parsedB) {
          return a.trackId - b.trackId
        }
      })
    }

    if (term === 'price') {
      return this.results.results.sort((a, b) => {
        if (a.trackPrice > b.trackPrice) return 1
        if (a.trackPrice < b.trackPrice) return -1
        if (a.trackPrice === b.trackPrice) {
          return a.trackId - b.trackId
        }
      })
    }
  }

  getId(id) {
    this.searchService.trackId = id;
  }
}
