import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { HttpService } from '../../../../service/http.service';

@Component({
  selector: 'app-business-highlights',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './business-highlights.component.html',
  styleUrl: './business-highlights.component.scss'
})
export class BusinessHighlightsComponent {

  businessUrl = '/api/ourHistory/businessDescription';
  businessData: any;
  historyUrl = '/api/ourHistory/business'
  historyData: any;

  constructor(private http: HttpService) { }

  ngOnInit() {
    this.onLoadBusinessHighlights();
    this.onLoadBusiness();
  }
  onLoadBusiness() {
    this.http.get(this.historyUrl).subscribe(response => {
      this.historyData = response;
    })
  }
  onLoadBusinessHighlights() {
    this.http.get(this.businessUrl).subscribe(response => {
      this.businessData = response;
    })
  }

  highlights = [
    {
      img: "images/about/Rectangle 472.png",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ullamcorper hendrerit ante at consectetur. Donec nulla enim, eleifend eu nisl id, gravida vulputate lectus. Pellentesque eleifend feugiat nisl, nec gravida tortor volutpat non. Phasellus ut volutpat tellus, ut porta orci. Sed pellentesque id felis id rutrum."
    },
    {
      img: "images/about/Rectangle 472.png",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ullamcorper hendrerit ante at consectetur. Donec nulla enim, eleifend eu nisl id, gravida vulputate lectus. Pellentesque eleifend feugiat nisl, nec gravida tortor volutpat non. Phasellus ut volutpat tellus, ut porta orci. Sed pellentesque id felis id rutrum."
    },
    {
      img: "images/about/Rectangle 472.png",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ullamcorper hendrerit ante at consectetur. Donec nulla enim, eleifend eu nisl id, gravida vulputate lectus. Pellentesque eleifend feugiat nisl, nec gravida tortor volutpat non. Phasellus ut volutpat tellus, ut porta orci. Sed pellentesque id felis id rutrum."
    }
  ]

}
