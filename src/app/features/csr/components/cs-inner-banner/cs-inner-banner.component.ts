import { Component, Input } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { HttpService } from '../../../../service/http.service';
import { NgIf, TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-cs-inner-banner',
  standalone: true,
  imports: [NgIf, RouterModule, TitleCasePipe],
  templateUrl: './cs-inner-banner.component.html',
  styleUrl: './cs-inner-banner.component.scss'
})
export class CsInnerBannerComponent {
  csrInnerBannerUrl = '/api/csr/csrInnerBanner';
  csrTitleUrl = '/api/csr/csrTitle';
  csrInnerData: any
  csrTitleData: any;
  data: any;
  dataId: any;
  filterBanner: any;
  filterTitle: any;
  categoryName:any;
  constructor(private activateRoute: ActivatedRoute, private http: HttpService) { }

  ngOnInit() {
    this.activateRoute.paramMap.subscribe((param) => {
      this.dataId = param.get('url');
      this.categoryName = param.get('categoryName');
      this.onLoadTitle(param.get('url'));
      this.onLoadBanner(param.get('url'));
    })
  }

  onLoadTitle(url: any){
    this.http.get(this.csrTitleUrl).subscribe((response) => {
      this.csrTitleData = response;
      this.filterTitle = this.csrTitleData.find((p: any) => p.csrListId === url);
    })
  }


  onLoadBanner(url: any) {
    this.http.get(this.csrInnerBannerUrl).subscribe((response) => {
      this.data = response;
      this.filterBanner = this.data.find((p: any) => p.csrListId === url);
    })
  }
}
