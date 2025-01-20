import { Component } from '@angular/core';
import { CsrBannerComponent } from './components/csr-banner/csr-banner.component';
import { CsrAboutComponent } from './components/csr-about/csr-about.component';
import { CsrAchievementComponent } from './components/csr-achievement/csr-achievement.component';
import { CsrImpactComponent } from './components/csr-impact/csr-impact.component';
import { CsrReportsComponent } from './components/csr-reports/csr-reports.component';
import { CsrVideoComponent } from './components/csr-video/csr-video.component';
import { ChairmanMessageComponent } from './components/chairman-message/chairman-message.component';
import { CsrWorkAreasComponent } from './components/csr-work-areas/csr-work-areas.component';

@Component({
  selector: 'app-csr',
  standalone: true,
  imports: [
    CsrBannerComponent,
    CsrAboutComponent,
    CsrAchievementComponent,
    CsrImpactComponent,
    CsrReportsComponent,
    CsrVideoComponent,
    ChairmanMessageComponent,
    CsrWorkAreasComponent
  ],
  templateUrl: './csr.component.html',
  styleUrl: './csr.component.scss'
})
export class CsrComponent {

}
