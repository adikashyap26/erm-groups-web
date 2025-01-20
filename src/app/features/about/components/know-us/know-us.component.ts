import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { HttpService } from '../../../../service/http.service';

@Component({
  selector: 'app-know-us',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './know-us.component.html',
  styleUrl: './know-us.component.scss'
})
export class KnowUsComponent {

  knowusUrl = '/api/about/knowUs';
  knowusData: any;
  knowusListsUrl = '/api/about/knowUsLists';
  knowusListData: any;
  knowusDescriptionUrl = '/api/about/knowUsDescription';
  knowusDescriptionData: any;

  constructor(private http: HttpService) { }

  ngOnInit() {
   this.onLoadKnowUs();
   this.onLoadKnowUsLists();
   this.onLoadKnowusDescription();
  }

  onLoadKnowUs(){
    this.http.get(this.knowusUrl).subscribe(response => {
      this.knowusData = response;
    })
  }

  onLoadKnowUsLists(){
    this.http.get(this.knowusListsUrl).subscribe(response => {
      this.knowusListData = response;
    })
  }

  onLoadKnowusDescription(){
    this.http.get(this.knowusDescriptionUrl).subscribe(response => {
      this.knowusDescriptionData = response;
    })
  }

  knowus = [
    {
      title: "Manufacture of Sponge Iron and Steel",
      text: "We produce high-quality sponge iron, MS steel billets, and TMT bars. Our facilities are equipped with the latest technology to ensure superior product quality and efficient production processes",
      img: "images/about/manufacture.png"
    },
    {
      title: "Renewable Energy",
      text: "Committed to sustainability, we have invested in wind and solar power generation, contributing to a greener future.",
      img: "images/about/manufacture.png"
    },
    {
      title: "Industrial Raw Materials",
      text: "To cater to the needs of the steel, cement, sugar, and power industries, we established M/s. Benaka Minerals Trading Pvt. Ltd., This venture ensures a steady supply of essential raw materials and fluxes.",
      img: "images/about/manufacture.png"
    },
    {
      title: "IT and Electronics",
      text: "Embracing new-age technology, we founded M/s. Codeland Infosolutions Pvt. Ltd., an IT company that offers SaaS-based telematics products and an eCommerce platform for market research reports.",
      img: "images/about/manufacture.png"
    },
    {
      title: "Manufacture of Sponge Iron and Steel",
      text: "We produce high-quality sponge iron, MS steel billets, and TMT bars. Our facilities are equipped with the latest technology to ensure superior product quality and efficient production processes",
      img: "images/about/manufacture.png"
    }
  ]
}
