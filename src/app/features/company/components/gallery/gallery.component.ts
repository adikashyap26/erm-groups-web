import { NgFor, NgIf } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild, Input, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import lightGallery from 'lightgallery';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import { HttpService } from '../../../../service/http.service';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements AfterViewInit {
  @ViewChild('galleryContainer', { static: false }) galleryContainer!: ElementRef;

  @Input() galleryId: any;
  galleryUrl = '/api/company/companyGalleryByUrl';
  galleryData: any;
  private galleryInitialized = false;
  

  constructor(
    private activateRoute: ActivatedRoute,
    private http: HttpService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit() {
    if (this.galleryId?.urlId) {
      this.loadGalleryData(this.galleryId.urlId);
    }
  }

  ngAfterViewInit() {
    // Ensure the gallery initializes after the data is loaded
    this.cdr.detectChanges();
    if (this.galleryData && !this.galleryInitialized) {
      this.initializeGallery();
    }
  }

  loadGalleryData(url: any) {
    const requestUrl = `${this.galleryUrl}/${url}`;
    this.http.get(requestUrl).subscribe((response) => {
      this.galleryData = response;
      this.cdr.detectChanges(); // Ensure the view updates
      if (!this.galleryInitialized) {
        this.initializeGallery();
      }
    });
  }

  initializeGallery() {
    if (typeof window !== 'undefined' && this.galleryContainer?.nativeElement) {
      lightGallery(this.galleryContainer.nativeElement, {
        selector: '.gallery-item',
        plugins: [lgThumbnail],
        speed: 500,
      });
      this.galleryInitialized = true;
    }
  }
}
