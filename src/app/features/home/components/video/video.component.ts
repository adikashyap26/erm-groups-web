

import { NgFor, CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { HttpService } from '../../../../service/http.service';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-video',
  standalone: true,
  imports: [NgIf],
  templateUrl: './video.component.html',
  styleUrl: './video.component.scss'
})
export class VideoComponent {
  dataUrl = '/api/home/VideoSectionById';
  data: any;
  sanitizedVideoUrl: any;
  
  constructor(private sanitizer: DomSanitizer, private http: HttpService) {}
  
  ngOnInit() {
    let url = this.dataUrl + '/' + 'Home';
    this.http.get(url).subscribe((response: any) => {
      this.data = response;
      if (this.data?.video_url && !this.sanitizedVideoUrl) {
        this.sanitizedVideoUrl = this.getSanitizedUrl();
      }
    });
  }
  
  getSanitizedUrl() {
    if (this.data && this.data.video_url) {
      return this.sanitizer.bypassSecurityTrustResourceUrl(this.data.video_url);
    }
    return null; // Return null if video_url is not available
  }
}
