import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../../../../service/http.service';
import { MiningItemBannerComponent } from '../mining-item-banner/mining-item-banner.component';
import { MiningGalleryComponent } from '../mining-gallery/mining-gallery.component';
import { MiningFeaturesComponent } from '../mining-features/mining-features.component';
import { MiningOverviewComponent } from '../mining-overview/mining-overview.component';

@Component({
  selector: 'app-mining-item',
  standalone: true,
  imports: [
    MiningItemBannerComponent,
    MiningOverviewComponent,
    MiningFeaturesComponent,
    MiningGalleryComponent
  ],
  templateUrl: './mining-item.component.html',
  styleUrl: './mining-item.component.scss'
})
export class MiningItemComponent {
  miningInnerUrl = '/api/mining/miningPageByMiningUrl'
  dataId: any;
  data: any;

  constructor(private activateRoute: ActivatedRoute, private http: HttpService) { }

  ngOnInit() {
    this.activateRoute.paramMap.subscribe((param) => {
      this.dataId = param.get('url')
      if (this.dataId) {
        this.onLoadmining(param.get('url'));
      }
    })
  }


  onLoadmining(url: any) {
    let urlData = this.miningInnerUrl + '/' + url;
    this.http.get(urlData).subscribe((response) => {
      this.data = response;
    })
  }
}
