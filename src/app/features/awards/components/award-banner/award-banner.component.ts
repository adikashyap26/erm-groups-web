import { Component } from '@angular/core';
import { HttpService } from '../../../../service/http.service';
import { NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-award-banner',
  standalone: true,
  imports: [NgIf, RouterModule],
  templateUrl: './award-banner.component.html',
  styleUrl: './award-banner.component.scss'
})
export class AwardBannerComponent {
  bannerUrl = '/api/award/awardBanner'
  bannerData: any;

  constructor(private http: HttpService) { }

  ngOnInit() {
    this.http.get(this.bannerUrl).subscribe(response => {
      this.bannerData = response;
    })
  }
}
