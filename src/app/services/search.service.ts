import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class SearchService {
  baseUrl = 'https://itunes.apple.com/search?';
  results: any;
  term: string;
  trackId: string;

  constructor(private http: HttpClient) {}

  search(term: string): Promise<any> {
    return this.http.jsonp(`${this.baseUrl}media=music&term=${term}`, 'callback')
      .toPromise();
  }

  onClick(row: any){
    this.searchService.setData(row);
    this.router.navigate(['/track'])
  }

}


