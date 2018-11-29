import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { SearchService } from 'src/app/services/search.service';


@Component({
  selector: 'app-player-page',
  templateUrl: './player-page.component.html',
  styleUrls: ['./player-page.component.scss']
})

export class PlayerPageComponent implements OnInit {
  public id: string;
  results: any;
  trackId: any;
  search: string;
  nextAudio = new Audio();
  albumImage: string;

  
  constructor(
    private searchService: SearchService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.trackId = params.id;
    });
    this.results = JSON.parse(localStorage.getItem('tracks'));
  }
  loadSong(id) {
    this.albumImage = this.results.results[id].artworkUrl100

    let trackName = this.results.results[id].trackName;
    (document.getElementById('trackName') as HTMLTitleElement).textContent = trackName;

    let artistName = this.results.results[id].artistName;
    (document.getElementById('artistName') as HTMLTitleElement).textContent = artistName;

    let genreName = this.results.results[id].primaryGenreName;
    (document.getElementById('genreName') as HTMLTimeElement).textContent = genreName;

    let relaseDate = this.results.results[id].releaseDate;
    let year = new Date(relaseDate);
    let fullYear = year.getFullYear();
    (document.getElementById('relaseDate') as HTMLTitleElement).textContent = ' - '+fullYear;

    let img = this.results.results[id].artworkUrl100;
    (document.querySelector('.album-cover') as HTMLImageElement).src = img;

    let song = this.results.results[id].previewUrl;
  
    this.nextAudio.src = song;
    this.nextAudio.load();

    this.playPause();
    this.trackId = id;
    
  }

  playPause() {
    if (this.nextAudio.paused) {
      this.nextAudio.play();
    } else {
      this.nextAudio.pause();
    }
  }

  stop() {
    this.nextAudio.pause();
    this.nextAudio.currentTime = 0;
  }

  prev() {
    this.trackId--;
    if (this.trackId < 0 ) {
      this.trackId = 0;
    }
    this.loadSong(this.trackId);
    this.stop();
    this.playPause();
  }

  next() {
    this.trackId++;
    this.loadSong(this.trackId);
    this.stop();
    this.playPause();
  }
} 