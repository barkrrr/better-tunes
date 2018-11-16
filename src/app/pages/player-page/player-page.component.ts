import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-player-page',
  templateUrl: './player-page.component.html',
  styleUrls: ['./player-page.component.scss']
})
export class PlayerPageComponent implements OnInit {
  public id: string;
  result: any;
  trackId: any;
  search: string;
  nextAudio = new Audio();

  
  constructor(
    private searchService: SearchService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    const data = this.searchService.getData();
  }

  // loadSong(id) {
  //   let trackName = this.results.results[id].trackName;
  //   (document.getElementById('trackName') as HTMLTitleElement).textContent = trackName;

  //   let artistName = this.results.results[id].artistName;
  //   (document.getElementById('artistName') as HTMLTitleElement).textContent = artistName;

  //   let genreName = this.results.results[id].primaryGenreName;
  //   (document.getElementById('genreName') as HTMLTimeElement).textContent = genreName;

  //   let relaseDate = this.results.results[id].releaseDate;
  //   let year = new Date(relaseDate);
  //   let fullYear = year.getFullYear();
  //   (document.getElementById('relaseDate') as HTMLTitleElement).textContent = ' - '+fullYear;

  //   let img = this.results.results[id].artworkUrl100;
  //   (document.getElementById('img-album') as HTMLImageElement).src = img;
  //   // let img = document.getElementById('img-album')
  //   // img.setAttribute('src', `${this.results.results[id].artworkUrl100}`);

  //   let song = this.results.results[id].previewUrl;
  //   // console.log(song);
  //   // (document.getElementById('source-track') as HTMLAudioElement).src = song;
  //   this.nextAudio.src = song;
  //   this.nextAudio.load();
  //   // this.nextAudio;
  //   this.playPause();
  //   this.trackId = id;
    

  //   //document.getElementById("source-track").setAttribute('src', song);
  //   //let audio = document.getElementsByTagName('audio');
  //   //audio[0].autoplay = true;
  //   // console.log(audio);
  // }

  // playPause() {
  //   if (this.nextAudio.paused) {
  //     this.nextAudio.play();
  //   } else {
  //     this.nextAudio.pause();
  //   }
  // }

  // stop() {
  //   this.nextAudio.pause();
  //   this.nextAudio.currentTime = 0;
  // }

  // prev() {
  //   this.trackId--;
  //   if (this.trackId < 0 ) {
  //     this.trackId = 0;
  //   }
  //   this.loadSong(this.trackId);
  //   this.stop();
  //   this.playPause();
  // }

  // next() {
  //   this.trackId++;
  //   this.loadSong(this.trackId);
  //   this.stop();
  //   this.playPause();
  // }
}