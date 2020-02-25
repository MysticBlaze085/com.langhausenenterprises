import {Component, Input, OnInit} from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss']
})
export class ImageSliderComponent implements OnInit {
  @Input() showNavigationArrows = false;
  @Input() showNavigationIndicators = false;

  @Input() sliderImages = [];

  constructor(public config: NgbCarouselConfig) {}
  ngOnInit(): void {
    this.config.showNavigationArrows = true;
    this.config.showNavigationIndicators = true;
  }
}
