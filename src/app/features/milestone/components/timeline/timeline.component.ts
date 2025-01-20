import { NgFor, NgIf } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { SlickCarouselComponent, SlickCarouselModule } from 'ngx-slick-carousel';
import { HttpService } from '../../../../service/http.service';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [NgFor, SlickCarouselModule, NgIf],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss'
})
export class TimelineComponent {

  @ViewChild('slickModal') slickModal!: SlickCarouselComponent;

  timelineCategoryUrl = '/api/ourHistory/ourTimeLineCategory'
  timelineCategoryData: any;
  timelineUrl = '/api/ourHistory/ourTimeLine';
  data: any;
  timelineData: any;

  constructor(private http: HttpService) { }

  ngOnInit() {
    this.onLoadTimelineCategory();
    this.onLoadTimeline();
  }

  onLoadTimelineCategory() {
    this.http.get(this.timelineCategoryUrl).subscribe(response => {
      this.timelineCategoryData = response;
    })
  }
  onLoadTimeline() {
    this.http.get(this.timelineUrl).subscribe(response => {
      this.timelineData = response;
    })
  }
  timeline = [
    {
      year: "1970",
      desc: "Sri E.Ramamurthy commenced mining operation in late 1970’s and laid the foundation stone for now called “ERM GROUP”.  With a vision to modernize the mining activities in a scientific & eco friendly manner, the mining operations were mechanized in late nineties.",
      img: "images/about/Rectangle 213.png"
    },
    {
      year: "1975",
      desc: "Sri E.Ramamurthy commenced mining operation in late 1970’s and laid the foundation stone for now called “ERM GROUP”.  With a vision to modernize the mining activities in a scientific & eco friendly manner, the mining operations were mechanized in late nineties.",
      img: "images/about/Rectangle 213.png"
    },
    {
      year: "1980",
      desc: "Sri E.Ramamurthy commenced mining operation in late 1970’s and laid the foundation stone for now called “ERM GROUP”.  With a vision to modernize the mining activities in a scientific & eco friendly manner, the mining operations were mechanized in late nineties.",
      img: "images/about/Rectangle 213.png"
    },
    {
      year: "1985",
      desc: "Sri E.Ramamurthy commenced mining operation in late 1970’s and laid the foundation stone for now called “ERM GROUP”.  With a vision to modernize the mining activities in a scientific & eco friendly manner, the mining operations were mechanized in late nineties.",
      img: "images/about/Rectangle 213.png"
    },
    {
      year: "1990",
      desc: "Sri E.Ramamurthy commenced mining operation in late 1970’s and laid the foundation stone for now called “ERM GROUP”.  With a vision to modernize the mining activities in a scientific & eco friendly manner, the mining operations were mechanized in late nineties.",
      img: "images/about/Rectangle 213.png"
    },
    {
      year: "1995",
      desc: "Sri E.Ramamurthy commenced mining operation in late 1970’s and laid the foundation stone for now called “ERM GROUP”.  With a vision to modernize the mining activities in a scientific & eco friendly manner, the mining operations were mechanized in late nineties.",
      img: "images/about/Rectangle 213.png"
    },
    {
      year: "2000",
      desc: "Sri E.Ramamurthy commenced mining operation in late 1970’s and laid the foundation stone for now called “ERM GROUP”.  With a vision to modernize the mining activities in a scientific & eco friendly manner, the mining operations were mechanized in late nineties.",
      img: "images/about/Rectangle 213.png"
    },
    {
      year: "2005",
      desc: "Sri E.Ramamurthy commenced mining operation in late 1970’s and laid the foundation stone for now called “ERM GROUP”.  With a vision to modernize the mining activities in a scientific & eco friendly manner, the mining operations were mechanized in late nineties.",
      img: "images/about/Rectangle 213.png"
    },
    {
      year: "2010",
      desc: "Sri E.Ramamurthy commenced mining operation in late 1970’s and laid the foundation stone for now called “ERM GROUP”.  With a vision to modernize the mining activities in a scientific & eco friendly manner, the mining operations were mechanized in late nineties.",
      img: "images/about/Rectangle 213.png"
    },
    {
      year: "2014",
      desc: "Sri E.Ramamurthy commenced mining operation in late 1970’s and laid the foundation stone for now called “ERM GROUP”.  With a vision to modernize the mining activities in a scientific & eco friendly manner, the mining operations were mechanized in late nineties.",
      img: "images/about/Rectangle 213.png"
    }
  ]

  sliderForConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.slider-nav'
  };

  sliderNavConfig = {
    slidesToShow: 7,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.slider-for'
  };

  goToPrevSlide() {
    if (this.slickModal) {
      this.slickModal.slickPrev();
    }
  }
  goToNextSlide() {
    if (this.slickModal) {
      this.slickModal.slickNext();
    }
  }
}
