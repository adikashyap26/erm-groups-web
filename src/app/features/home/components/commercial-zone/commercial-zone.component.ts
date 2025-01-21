import { NgFor, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { AfterViewChecked, ApplicationRef, ChangeDetectorRef, Component, NgZone, ViewChild } from '@angular/core';
import {MatTabChangeEvent, MatTabsModule} from '@angular/material/tabs';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { HttpService } from '../../../../service/http.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-commercial-zone',
  standalone: true,
  imports: [NgFor, NgIf,MatTabsModule, SlickCarouselModule],
  templateUrl: './commercial-zone.component.html',
  styleUrl: './commercial-zone.component.scss'
})
export class CommercialZoneComponent implements AfterViewChecked{
  responseData: any;
  filteredData: any;
  carouselData: any;
  filteredSubchild: any;
  urlCategory = '/api/home/ermCommericialZoneCategory';
  InnerUrl =  '/api/home/ErmCommericialZoneCategoryData';
  data: any;
  InnerData:any;
  subData:any;
  loading = false;
  activeTabIndex: number | null = null;

  @ViewChild('slickCarousel') slickCarousel: any;

  constructor(private http: HttpService, private httpData: HttpClient,  private route: ActivatedRoute, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.onLoadCategory();
    this.onLoadZoneCategory();
  }

  ngAfterViewChecked() {
    if (this.activeTabIndex !== null && this.subData && this.subData.length > 0) {
      // Reinitialize the Slick carousel when content is updated
      setTimeout(() => {
        if (this.slickCarousel) {
          this.slickCarousel.slick('unslick');
          this.slickCarousel.slick('reinit');
        }
      }, 100); // Adjust the delay to ensure Slick initializes correctly
    }
  }

  onLoadCategory() {
    this.http.get(this.urlCategory).subscribe(response => {
      this.data = response;    
      console.log(this.data)
    });
  }

  onLoadZoneCategory(){
    this.http.get(this.InnerUrl).subscribe(response => {
      this.InnerData = response;
      console.log(this.InnerData)
    })
  }

  selectTab(id: any, index: number){
    console.log(id);   
    this.activeTabIndex = index;
    this.subData = this.InnerData.filter((p: any) => p.ermCommericalZoneCategoryId._id === id)
    console.log(this.subData);
    this.cdr.detectChanges()

    setTimeout(() => {
      if (this.slickCarousel) {
        this.slickCarousel.slick('unslick');
        this.slickCarousel.slick('reinit');
      }
    }, 0);
  }

  configSlide = {
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,  
  };

}
