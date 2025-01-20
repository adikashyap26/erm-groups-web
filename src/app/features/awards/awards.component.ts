import { Component } from '@angular/core';
import { AwardBannerComponent } from './components/award-banner/award-banner.component';
import { AwardListComponent } from './components/award-list/award-list.component';

@Component({
  selector: 'app-awards',
  standalone: true,
  imports: [
    AwardBannerComponent,
    AwardListComponent
  ],
  templateUrl: './awards.component.html',
  styleUrl: './awards.component.scss'
})
export class AwardsComponent {

}
