import { Component } from '@angular/core';
import { HttpService } from '../../../../service/http.service';
import { NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-contact-banner',
  standalone: true,
  imports: [NgIf, RouterModule],
  templateUrl: './contact-banner.component.html',
  styleUrl: './contact-banner.component.scss'
})
export class ContactBannerComponent {
  bannerUrl = '/api/contact/contactBanner'
  bannerData: any;

  constructor(private http: HttpService){}

  ngOnInit(){
    this.http.get(this.bannerUrl).subscribe(response => {
      this.bannerData = response;
    })
  }
}
