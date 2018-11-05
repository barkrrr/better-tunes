import { Injectable } from '@angular/core';
import { Json } from '@angular/http';

@Injectable({
  providedIn: 'root'
})

export class SearchService {
  apiRoot: string = 'https://affiliate.itunes.apple.com/resources/documentation/itunes-store-web-service-search-api/';
  results: SearchItem[];

  constructor(private json: Json) {
    this.results = [];
  }

  search(term: string) {
    return new Promise(() => {
      this.results = [];
      let apiURL = `${this.apiRoot}?term=${term}&media=music&limit=20&callback`;
      this.json.request(apiURL)
        .toPromise()
          .then(
              res => { 
                this.results = res.json().results.map(item => {
                  return new SearchItem(
                      item.collectionName,
                      item.releaseDate,
                      item.collectionViewUrl,
                      item.trackTimeMillis,
                      item.primaryGenreName,
                      item.collectionPrice
                  );
                });
              },
          );
    });
  }
}