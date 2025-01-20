import { Component } from '@angular/core';
import { MilestoneBannerComponent } from './components/milestone-banner/milestone-banner.component';
import { HistoryComponent } from './components/history/history.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { BusinessHighlightsComponent } from './components/business-highlights/business-highlights.component';

@Component({
  selector: 'app-milestone',
  standalone: true,
  imports: [
    MilestoneBannerComponent,
    HistoryComponent,
    TimelineComponent,
    BusinessHighlightsComponent
  ],
  templateUrl: './milestone.component.html',
  styleUrl: './milestone.component.scss'
})
export class MilestoneComponent {

}
