import { Component } from '@angular/core';
import { HttpService } from '../../../../service/http.service';
import { NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-company-banner',
  standalone: true,
  imports: [NgIf, RouterModule],
  templateUrl: './company-banner.component.html',
  styleUrl: './company-banner.component.scss'
})
export class CompanyBannerComponent {
  bannerUrl = '/api/company/companyBanner'
  bannerData: any;

  constructor(private http: HttpService){}

  ngOnInit(){
    this.http.get(this.bannerUrl).subscribe(response => {
      this.bannerData = response;
    })
  }

}
