import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebsiteRoutingModule } from './website-routing.module';
import { HomeComponent } from './containers/home/home.component';
import { WEBSITE_COMPONENTS } from './components';

@NgModule({
  declarations: [HomeComponent, ...WEBSITE_COMPONENTS],
  imports: [CommonModule, WebsiteRoutingModule]
})
export class WebsiteModule {}
