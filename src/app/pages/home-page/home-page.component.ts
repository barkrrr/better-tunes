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
        console.log(results)
      })
      .catch((err) => {
        console.log(err)
        this.processing = false;
        this.feedbackEnabled = false;
      });
      }
    }
  

  sortBy(time, genre, price) {
    let array = this.results.results;
    if (this.results.results === 'time') {
      array.sort((a, b) => {
        return a.trackTimeMillis - b.trackTimeMillis;
      });
    if (this.results.results === 'genre') {
      array.sort((a, b) => {
        return a.primaryGenreName - b.primaryGenreName;
      });
    if (this.results.results === 'price') {
      array.sort((a, b) => {
        return a.trackPrice - b.trackPrice;
      });
    }
  }
    }
}
}
