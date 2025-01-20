import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { HttpService } from '../../../../service/http.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-milestone-banner',
  standalone: true,
  imports: [NgIf, RouterModule],
  templateUrl: './milestone-banner.component.html',
  styleUrl: './milestone-banner.component.scss'
})
export class MilestoneBannerComponent {
  bannerUrl = '/api/ourHistory/ourHistoryBanner'
  bannerData: any;

  constructor(private http: HttpService){}

  ngOnInit(){
    this.http.get(this.bannerUrl).subscribe(response => {
      this.bannerData = response;
    })
  }
}
