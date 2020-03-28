import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  carouselImageSlider = [
    {
      image: `assets/images/jukebox-975086_1280.jpg`,
      content: `WE COME TO YOUR HOME OR PLACE OF BUSINESS.`
    },
    {
      image: `assets/images/music-box-1419792_1280.jpg`,
      content: `REPAIR JUKEBOXES FROM THE 1950'S THROUGH THE CD JUKEBOX ERA.`
    },
    {
      image: `assets/images/showcase.jpg`,
      content: `SELL JUKEBOXES FOR A FAIR PRICE AND REPAIR WHAT WE SELL.`
    }
  ];

  constructor() {}

  ngOnInit(): void {}

  onSubmit(event) {
    console.log('form', event);
  }
}
