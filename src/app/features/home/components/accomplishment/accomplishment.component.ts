import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { HttpService } from '../../../../service/http.service';

@Component({
  selector: 'app-accomplishment',
  standalone: true,
  imports: [SlickCarouselModule, NgFor, NgIf],
  templateUrl: './accomplishment.component.html',
  styleUrl: './accomplishment.component.scss'
})
export class AccomplishmentComponent {
  dataUrl = '/api/home/accoumplishment'
  accomplishment: any;

  constructor(private http: HttpService) { }

  ngOnInit() {
    this.http.get(this.dataUrl).subscribe(response => {
      this.accomplishment = response;
    })
  }



  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    infinite: true,
    // autoplay: true,
    // autoplaySpeed: 2000,
  };
}
