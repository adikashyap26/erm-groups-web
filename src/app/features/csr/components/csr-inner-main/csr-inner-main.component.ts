import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../../../../service/http.service';
import { CsInnerBannerComponent } from '../cs-inner-banner/cs-inner-banner.component';
import { CsInnerInitiativeComponent } from '../cs-inner-initiative/cs-inner-initiative.component';
import { CsInnerAboutComponent } from '../cs-inner-about/cs-inner-about.component';
import { CsInnerHighlightsComponent } from '../cs-inner-highlights/cs-inner-highlights.component';
import { CsInnerGalleryComponent } from '../cs-inner-gallery/cs-inner-gallery.component';

@Component({
  selector: 'app-csr-inner-main',
  standalone: true,
  imports: [
    CsInnerBannerComponent,
    CsInnerAboutComponent,
    CsInnerInitiativeComponent,
    CsInnerHighlightsComponent,
    CsInnerGalleryComponent
  ],
  templateUrl: './csr-inner-main.component.html',
  styleUrl: './csr-inner-main.component.scss'
})
export class CsrInnerMainComponent {
  csrInnerBannerUrl = '/api/csr/csrInnerAboutUsByCsrListId';
  csrInnerData: any
  data: any;
  dataId: any;
  dataUrlId: any;

  constructor(private activateRoute: ActivatedRoute, private http: HttpService) { }

  ngOnInit() {
    this.activateRoute.paramMap.subscribe((param) => {
      this.dataId = param.get('url')
      this.onLoadCsr(param.get('url'));
    })
  }


  onLoadCsr(url: any) {
    let urlData = this.csrInnerBannerUrl + '/' + url
    this.http.get(urlData).subscribe((response) => {
      this.data = response;
      this.dataUrlId = this.data[0].csrListId;
    })
  }

}
