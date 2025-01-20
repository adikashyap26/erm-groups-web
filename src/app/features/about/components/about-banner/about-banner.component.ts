import { Component } from '@angular/core';
import { HttpService } from '../../../../service/http.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-about-banner',
  standalone: true,
  imports: [NgIf],
  templateUrl: './about-banner.component.html',
  styleUrl: './about-banner.component.scss'
})
export class AboutBannerComponent {
  bannerUrl = '/api/about/aboutBanner'
  bannerData: any;

  constructor(private http: HttpService){}

  ngOnInit(){
    this.http.get(this.bannerUrl).subscribe(response => {
      this.bannerData = response;
    })
  }
}
