import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { HttpService } from '../../../../service/http.service';
import { RouterModule, Router } from '@angular/router';



@Component({
  selector: 'app-social-responsibility',
  standalone: true,
  imports: [NgFor, SlickCarouselModule,RouterModule],
  templateUrl: './social-responsibility.component.html',
  styleUrl: './social-responsibility.component.scss'
})
export class SocialResponsibilityComponent {

    dataUrl = '/api/home/corporateSocialResponsibility'
    responsibility: any;
  
    constructor(private http: HttpService, private routes: Router) { }
  
    ngOnInit() {
      this.http.get(this.dataUrl).subscribe(response => {
        this.responsibility = response;
      })
    }


    onClickRoutes(item:any){
      this.routes.navigate([item]);
      window.scrollTo(0, 0)
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
    responsive: [
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 3
        }
      }
    ]
  };
}
