import { Component } from '@angular/core';
import { HttpService } from '../../../../service/http.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-csr-banner',
  standalone: true,
  imports: [NgIf],
  templateUrl: './csr-banner.component.html',
  styleUrl: './csr-banner.component.scss'
})
export class CsrBannerComponent {
 bannerUrl = '/api/csr/csrMainBanner'
  bannerData: any;

  constructor(private http: HttpService){}

  ngOnInit(){
    this.http.get(this.bannerUrl).subscribe(response => {
      this.bannerData = response;
    })
  }
}
