import { NgFor, NgIf } from '@angular/common';
import { Component, ElementRef, ViewChild, Input, ChangeDetectorRef, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../../../../service/http.service';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
  @ViewChild('galleryContainer', { static: false }) galleryContainer!: ElementRef;

  @Input() galleryId: any;
  galleryUrl = '/api/company/companyGalleryByUrl';
  private galleryInitialized = false;
  galleryData: any;
  filterGallery: any;
  dataId: any;
  isLightboxOpen = false;
  currentImage = '';
  currentIndex = 0;

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

  ngOnChanges(changes: SimpleChanges) {
    if (changes['galleryId'] && this.galleryId?.urlId) {
      this.loadGalleryData(this.galleryId.urlId);
    }
  }

  closeLightbox() {
    this.isLightboxOpen = false;
      document.body.style.overflowY = 'auto'
  }


  openLightbox(index: number) {
    this.isLightboxOpen = true;
    this.currentIndex = index;
    this.currentImage = 'https://erm-backend-deploy-production.up.railway.app/' + this.filterGallery[index].thumbnail;
    document.body.style.overflowY = 'hidden';
  }


  loadGalleryData(url: any) {
    const requestUrl = `${this.galleryUrl}/${url}`;
    this.http.get(requestUrl).subscribe(
      (response:any) => {
        this.galleryData = response.data;
        this.filterGallery = response.data;
      },
      (error) => {
        this.galleryData = null;
      }
    );
  }


  prevImage(event: Event) {
    event.stopPropagation();
    this.currentIndex =
      (this.currentIndex - 1 + this.filterGallery.length) %
      this.filterGallery.length;
      this.currentImage =  'https://erm-backend-deploy-production.up.railway.app/' +  this.filterGallery[this.currentIndex].thumbnail;
  }

  nextImage(event: Event) {
    event.stopPropagation();
    this.currentIndex = (this.currentIndex + 1) % this.filterGallery.length;
    this.currentImage ='https://erm-backend-deploy-production.up.railway.app/' +  this.filterGallery[this.currentIndex].thumbnail;
  }
} 