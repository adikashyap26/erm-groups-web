import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpService } from '../../../../service/http.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-csr-video',
  standalone: true,
  imports: [NgIf],
  templateUrl: './csr-video.component.html',
  styleUrl: './csr-video.component.scss'
})
export class CsrVideoComponent {
  dataUrl = '/api/home/VideoSectionById';
  data: any;
  sanitizedVideoUrl: any;

  constructor(private sanitizer: DomSanitizer, private http: HttpService) { }

  ngOnInit() {
    let url = this.dataUrl + '/' + 'Csr';
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
