import { CommonModule } from '@angular/common';
import { NgFor, NgIf } from '@angular/common';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { HttpService } from '../../../../service/http.service';
import { ActivatedRoute } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
declare var bootstrap: any;


@Component({
  selector: 'app-commercial-zone',
  standalone: true,
  imports: [NgFor, NgIf, MatTabsModule, SlickCarouselModule, CommonModule, RouterModule],
  templateUrl: './commercial-zone.component.html',
  styleUrls: ['./commercial-zone.component.scss']
})
export class CommercialZoneComponent {
  responseData: any;
  filteredData: any;
  carouselData: any;
  filteredSubchild: any;
  urlCategory = '/api/home/ermCommericialZoneCategory';
  InnerUrl = '/api/home/ErmCommericialZoneCategoryDataByCategory';
  data: any[] = [];
  subData: any[] = [];
  loading = false;
  selectedTabIndex = 0;
  mainTab: any;
  TabData: any;
  currentIndex = 0; // Track the current slide
  selectedCategoryId: number | null = null;

  constructor(private router: Router, private http: HttpService, private route: ActivatedRoute, private cdr: ChangeDetectorRef) { }
  @ViewChild('slickCarousel', { static: true }) slickCarousel!: ElementRef;
  ngOnInit() {
    this.onLoadMainCategory();
  }

  onLoadMainCategory() {
    this.http.get(this.urlCategory).subscribe(response => {
      this.mainTab = response;
      if (this.mainTab && this.mainTab.length > 0) {
        this.onClickMainTab(this.mainTab[0]._id);
      }
    });
  }

  onClickMainTab(id: any) {
    this.selectedCategoryId = id;
    this.TabData = [];

    // Ensure the carousel is refreshed after the data is updated
    const url = `${this.InnerUrl}/${id}`;
    this.http.get(url).subscribe(response => {
      this.TabData = response;

      // Wait for the data to be updated before refreshing the carousel
      if (this.slickCarousel && this.slickCarousel.nativeElement) {
        // Refresh the slick carousel after data is loaded
        this.slickCarousel.nativeElement.slick('refresh');
      }
    });
  }


  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  configSlide = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    infinite: true
  }


  onClickRoutes(link: any) {
    debugger;
    const isExternalLink = link.startsWith('http://') || link.startsWith('https://');
    if (isExternalLink) {
      window.open(link, '_blank');
    } else {
      this.router.navigate([link]);
    }
    window.scrollTo(0, 0);
  }


}
