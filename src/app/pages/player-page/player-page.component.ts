import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-player-page',
  templateUrl: './player-page.component.html',
  styleUrls: ['./player-page.component.scss']
})
export class PlayerPageComponent implements OnInit {
  results
  trackId
  
  constructor(
    private searchService: SearchService
  ) { }

  ngOnInit() {
    this.results = this.searchService.getStoredResult;
    this.trackId = this.search.trackId;
  }
}

