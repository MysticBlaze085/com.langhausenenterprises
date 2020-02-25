import { NgModule } from '@angular/core';
import { ReactiveFormsModule }          from '@angular/forms';
import { CommonModule } from '@angular/common';
import { WebsiteRoutingModule } from './website-routing.module';
import { HomeComponent } from './containers/home/home.component';
import { TopNavigationComponent } from './components/top-navigation/top-navigation.component';
import { NgbModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { WebsiteComponent } from './containers/website/website.component';
import { MatIconModule } from '@angular/material/icon';
import { ImageSliderComponent } from './components/image-slider/image-slider.component';
import {ServicesSectionComponent} from './components/services-section/services-section.component';
import { AboutSectionComponent } from './components/about-section/about-section.component';
import { ContactSectionComponent } from './components/contact-section/contact-section.component';
import { TestimonialSectionComponent } from './components/testimonial-section/testimonial-section.component';
import {MatButtonModule} from '@angular/material/button';
import {CalendlyService} from '../services/calendly.service';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [
    HomeComponent,
    TopNavigationComponent,
    WebsiteComponent,
    ImageSliderComponent,
    ServicesSectionComponent,
    AboutSectionComponent,
    ContactSectionComponent,
    TestimonialSectionComponent
  ],
    imports: [
        CommonModule,
        WebsiteRoutingModule,
        NgbModule,
        NgbNavModule,
        MatIconModule,
        MatButtonModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule
    ],
    providers: [CalendlyService]
})
export class WebsiteModule {}
