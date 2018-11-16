import { Component, OnInit, Input } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-homepage-card',
  templateUrl: './homepage-card.component.html',
  styleUrls: ['./homepage-card.component.scss']
})
export class HomepageCardComponent implements OnInit {
  @Input() result: any;
  
  constructor(private searchService: SearchService) { }

  getId(id) {
    this.searchService.trackId = id;
  }

  ngOnInit() {
  }

}
