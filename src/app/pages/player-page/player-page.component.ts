import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-player-page',
  templateUrl: './player-page.component.html',
  styleUrls: ['./player-page.component.scss']
})
export class PlayerPageComponent implements OnInit {
  id: string;
  searchQuery: string;
  result: any;
  term: string;

  
  constructor(
    private searchService: SearchService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {  
    this.searchService.getStoredResults(this.id);
    
  }
}
