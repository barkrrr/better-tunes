import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})

export class HomePageComponent implements OnInit {
  title = 'better-tunes';
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
}

