import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { HttpService } from '../../../../service/http.service';


@Component({
  selector: 'app-social-responsibility',
  standalone: true,
  imports: [NgFor, SlickCarouselModule],
  templateUrl: './social-responsibility.component.html',
  styleUrl: './social-responsibility.component.scss'
})
export class SocialResponsibilityComponent {

    dataUrl = '/api/home/corporateSocialResponsibility'
    responsibility: any;
  
    constructor(private http: HttpService) { }
  
    ngOnInit() {
      this.http.get(this.dataUrl).subscribe(response => {
        this.responsibility = response;
        console.log(this.responsibility)
      })
    }



  slideConfig = {
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000,
    centerMode: true,
    centerPadding: '60px',
  };
}
