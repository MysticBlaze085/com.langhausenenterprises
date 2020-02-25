import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-website',
  templateUrl: './website.component.html',
  styleUrls: ['./website.component.scss']
})
export class WebsiteComponent implements OnInit {
  topNavigationDetails = {
    navigationColor: 'navbar-dark bg-dark text-white',
    brand: `What's your Sound?`,
    hours: {
      icon: `av_timer`,
      content: `Monday - Friday 11am - 6pm`,
    },
      contact: { icon: `contact_phone`, content: `Contact`, link: `tel:14692334765` }
  };
  constructor() {}

  ngOnInit(): void {}
}
