import { Component } from '@angular/core';
import { BannerComponent } from './components/banner/banner.component';
import { AboutComponent } from './components/about/about.component';
import { CommercialZoneComponent } from './components/commercial-zone/commercial-zone.component';
import { WorkingComponent } from './components/working/working.component';
import { AccomplishmentComponent } from './components/accomplishment/accomplishment.component';
import { SocialResponsibilityComponent } from './components/social-responsibility/social-responsibility.component';
import { ExploreComponent } from './components/explore/explore.component';
import { ContactComponent } from './components/contact/contact.component';
import { VideoComponent } from './components/video/video.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    BannerComponent,
    AboutComponent,
    CommercialZoneComponent,
    WorkingComponent,
    AccomplishmentComponent,
    SocialResponsibilityComponent,
    ExploreComponent,
    ContactComponent,
    VideoComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
