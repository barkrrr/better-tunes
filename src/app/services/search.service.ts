import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class SearchService {
  baseUrl = 'https://itunes.apple.com/search?';
  results: any;
  trackId = null;
  term: string;

  constructor(private http: HttpClient) {}

  search(term: string): Promise<any> {
    return this.http.jsonp(`${this.baseUrl}media=music&term=${term}`, 'callback')
      .toPromise();
  }

  getStoredResults(id): Promise<any> {
    const options = {
      withCredentials: true
    };
    return this.http.jsonp(`${this.baseUrl}media=music&term=${this.term}/player`, 'callback')
      .toPromise();
  }
}


