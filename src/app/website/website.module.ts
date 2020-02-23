import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebsiteRoutingModule } from './website-routing.module';
import { HomeComponent } from './containers/home/home.component';
import { TopNavigationComponent } from './components/top-navigation/top-navigation.component';
import { NgbModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { WebsiteComponent } from './containers/website/website.component';
import { MatIconModule } from '@angular/material/icon';
import { ImageSliderComponent } from './components/image-slider/image-slider.component';
import { SectionsComponent } from './components/sections/sections.component';

@NgModule({
  declarations: [
    HomeComponent,
    TopNavigationComponent,
    WebsiteComponent,
    ImageSliderComponent,
    SectionsComponent
  ],
  imports: [
    CommonModule,
    WebsiteRoutingModule,
    NgbModule,
    NgbNavModule,
    MatIconModule
  ]
})
export class WebsiteModule {}
