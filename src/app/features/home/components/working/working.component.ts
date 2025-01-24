
import { NgFor, CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { HttpService } from '../../../../service/http.service';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-working',
  standalone: true,
  imports: [NgFor, NgIf, SlickCarouselModule],
  templateUrl: './working.component.html',
  styleUrl: './working.component.scss'
})
export class WorkingComponent {


  dataUrl = '/api/home/ermGroupsWorks'
  working: any;

  constructor(private http: HttpService) { }

  ngOnInit() {
    this.http.get(this.dataUrl).subscribe(response => {
      this.working = response;
    })
  }

  
  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    infinite: true,
    arrows: false,
    // autoplay: true,
    // autoplaySpeed: 2000,
  };

}
