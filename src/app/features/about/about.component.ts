import { Component } from '@angular/core';
import { AboutBannerComponent } from './components/about-banner/about-banner.component';
import { KnowUsComponent } from './components/know-us/know-us.component';
import { OurEthicsComponent } from './components/our-ethics/our-ethics.component';
import { ChairmanMessageComponent } from './components/chairman-message/chairman-message.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    AboutBannerComponent,
    KnowUsComponent,
    OurEthicsComponent,
    ChairmanMessageComponent
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

}
