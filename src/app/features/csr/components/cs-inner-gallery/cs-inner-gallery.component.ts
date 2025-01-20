import { ChangeDetectorRef, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { HttpService } from '../../../../service/http.service';
import { ActivatedRoute } from '@angular/router';
import lightGallery from 'lightgallery';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import { NgClass, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-cs-inner-gallery',
  standalone: true,
  imports: [NgIf, NgFor, NgClass],
  templateUrl: './cs-inner-gallery.component.html',
  styleUrl: './cs-inner-gallery.component.scss'
})
export class CsInnerGalleryComponent {

   @ViewChild('galleryContainer', { static: false }) galleryContainer!: ElementRef;
  csrGalleryUrl = '/api/csr/csrInnerImage';
  crGalleryData: any;
  dataId: any;
  galleryData: any;
  filterGallery: any;

  settings = {
      counter: true,
      download: false,
      plugins: [lgThumbnail]
    }
    private galleryInitialized = false; 

  constructor(private http: HttpService, private activateRoute: ActivatedRoute, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.activateRoute.paramMap.subscribe((param) => {
      this.dataId = param.get('url')
      this.onLoadGallery(param.get('url'));
    })
  }

  ngAfterViewInit() {
    setTimeout(() => {
      if (this.filterGallery && !this.galleryInitialized) {
        this.initializeGallery();
      }
    }, 0);
  }

  onLoadGallery(url: any) {
    this.http.get(this.csrGalleryUrl).subscribe(response => {
      this.crGalleryData = response;
      console.log(this.crGalleryData)
      this.filterGallery = this.crGalleryData.filter((p: any) => p.csrListId === url);
      console.log(this.filterGallery)
      this.cdr.detectChanges()
      if (this.filterGallery && !this.galleryInitialized) {
        this.initializeGallery();
      }
    })
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
