import { Component } from '@angular/core';
import { HttpService } from '../../../../service/http.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-mining-banner',
  standalone: true,
  imports: [NgIf],
  templateUrl: './mining-banner.component.html',
  styleUrl: './mining-banner.component.scss'
})
export class MiningBannerComponent {
 bannerUrl = '/api/mining/miningBanner'
  bannerData: any;

  constructor(private http: HttpService){}

  ngOnInit(){
    this.http.get(this.bannerUrl).subscribe(response => {
      this.bannerData = response;
    })
  }
}
