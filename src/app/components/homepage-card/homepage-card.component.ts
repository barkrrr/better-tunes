import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-homepage-card',
  templateUrl: './homepage-card.component.html',
  styleUrls: ['./homepage-card.component.scss']
})
export class HomepageCardComponent implements OnInit {
  @Input() result: any;
  constructor() { }

  ngOnInit() {
  }

}
