import { Component } from '@angular/core';
import { HttpService } from '../../../../service/http.service';
import { NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-career-banner',
  standalone: true,
  imports: [NgIf, RouterModule],
  templateUrl: './career-banner.component.html',
  styleUrl: './career-banner.component.scss'
})
export class CareerBannerComponent {
 bannerUrl = '/api/reports/careerBanner'
  bannerData: any;

  constructor(private http: HttpService) { }

  ngOnInit() {
    this.http.get(this.bannerUrl).subscribe(response => {
      this.bannerData = response;
    })
  }
}
