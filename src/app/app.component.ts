import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  loading: boolean = false;
  
  constructor(
    public itunes: SearchService,
    private route: ActivatedRoute,
    private router: Router) {
      this.route.params.subscribe(params => {
        console.log(params);
        if (params['term']) {
          this.onSearch(params['term'])
      }
    });
  }

  onSearch(term: string) {
    this.loading = true;
    this.itunes.search(term).then(_ => this.loading = false);
    this.router.navigate(['search', {term: term}]);
  }
}