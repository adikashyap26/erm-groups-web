import { Component } from '@angular/core';
import { HttpService } from '../../../../service/http.service';
import { NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-csr-banner',
  standalone: true,
  imports: [NgIf, RouterModule],
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
