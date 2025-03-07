import { Component } from '@angular/core';
import { HttpService } from '../../../../service/http.service';
import { NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-reports-banner',
  standalone: true,
  imports: [NgIf, RouterModule],
  templateUrl: './reports-banner.component.html',
  styleUrl: './reports-banner.component.scss'
})
export class ReportsBannerComponent {
 bannerUrl = '/api/reports/reportBanner'
  bannerData: any;

  constructor(private http: HttpService){}

  ngOnInit(){
    this.http.get(this.bannerUrl).subscribe(response => {
      this.bannerData = response;
    })
  }
}
