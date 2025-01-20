import { NgFor, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {MatTabChangeEvent, MatTabsModule} from '@angular/material/tabs';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { HttpService } from '../../../../service/http.service';
import { Router } from 'express';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-commercial-zone',
  standalone: true,
  imports: [NgFor, NgIf,MatTabsModule, SlickCarouselModule],
  templateUrl: './commercial-zone.component.html',
  styleUrl: './commercial-zone.component.scss'
})
export class CommercialZoneComponent {
  responseData: any;
  filteredData: any;
  carouselData: any;
  filteredSubchild: any;
  urlCategory = '/api/home/ermCommericialZoneCategory';
  InnerUrl =  '/api/home/ErmCommericialZoneCategoryDataByCategory';
  data: any;
  InnerData:any;
  subData:any;
  loading = false;



  constructor(private http: HttpService, private httpData: HttpClient,  private route: ActivatedRoute) { }

  ngOnInit() {
    this.onLoadCategory();
    this.route.queryParams.subscribe(params => {
      if (params['reloadData']) {
        this.onLoadCategory();
      }
    });
  }

  onLoadCategory() {
    this.http.get(this.urlCategory).subscribe(response => {
      this.data = response;
      if (this.data.length > 0) {
        this.onTabChange({ index: 0 } as MatTabChangeEvent);
      } else {
        this.subData = { message: 'We will update soon' };
        console.log('No data found: We will update soon');
      }
    });
  }

  onTabChange(event: MatTabChangeEvent): void {
    const selectedTab = this.data[event.index];
    if (!selectedTab || !selectedTab._id) {
      console.error('Invalid tab selected:', selectedTab);
      this.subData = [];
      this.loading = false;
      return;
    }
    this.subData = null;
    this.loading = true; 
    let url = `${this.InnerUrl}/${selectedTab._id}`;
  
    this.http.get(url).subscribe(
      (response) => {
        this.subData = response;
        this.loading = false; 
        console.log(this.subData);
      },
      (error) => {
        console.error('Error fetching data:', error);
        this.subData = [];
        this.loading = false; 
      }
    );
  }

  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  configSlide={
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    infinite: true
  }

}
