import { Component } from '@angular/core';
import { MiningBannerComponent } from './components/mining-banner/mining-banner.component';
import { MiningAboutComponent } from './components/mining-about/mining-about.component';
import { MiningListComponent } from './components/mining-list/mining-list.component';

@Component({
  selector: 'app-mining',
  standalone: true,
  imports: [
    MiningBannerComponent,
    MiningAboutComponent,
    MiningListComponent
  ],
  templateUrl: './mining.component.html',
  styleUrl: './mining.component.scss'
})
export class MiningComponent {

}
