import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'better-tunes';
  loading: boolean = false;
  
  constructor(
    public itunes: SearchService,
    private route: ActivatedRoute,
    private router: Router) {
    }
    }