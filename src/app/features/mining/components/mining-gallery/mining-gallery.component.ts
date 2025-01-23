import { ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import { HttpService } from '../../../../service/http.service';
import { ActivatedRoute } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-mining-gallery',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './mining-gallery.component.html',
  styleUrl: './mining-gallery.component.scss'
})
export class MiningGalleryComponent  {


  @ViewChild('galleryContainer', { static: false }) galleryContainer!: ElementRef;
  miningGalleryUrl = '/api/mining/miningGallery';
  galleryData: any;
  filterGallery: any;
  dataId: any;

  isLightboxOpen = false;
  currentImage = '';
  currentIndex = 0;

  constructor(private http: HttpService, private activateRoute: ActivatedRoute, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.activateRoute.paramMap.subscribe((param) => {
      this.dataId = param.get('url')
      if (this.dataId) {
        this.OnLoadMiningGallery(param.get('url'));
      }
    })
  }

  OnLoadMiningGallery(url: any) {
    this.http.get(this.miningGalleryUrl).subscribe(response => {
      this.galleryData = response;
      this.filterGallery = this.galleryData.filter((p: any) => p.miningUrlId === url)
    })
  }


  openLightbox(index: number) {
    this.isLightboxOpen = true;
    this.currentIndex = index;
    this.currentImage =
      'https://erm-backend-deploy-production.up.railway.app/' +
      this.filterGallery[index].thumbnail;
      document.body.style.overflowY = 'hidden';
  }

  closeLightbox() {
    this.isLightboxOpen = false;
    document.body.style.overflowY = 'auto'
  }

  prevImage(event: Event) {
    event.stopPropagation();
    this.currentIndex =
      (this.currentIndex - 1 + this.filterGallery.length) %
      this.filterGallery.length;
    this.currentImage =
      'https://erm-backend-deploy-production.up.railway.app/' +
      this.filterGallery[this.currentIndex].thumbnail;
  }

  nextImage(event: Event) {
    event.stopPropagation();
    this.currentIndex = (this.currentIndex + 1) % this.filterGallery.length;
    this.currentImage =
      'https://erm-backend-deploy-production.up.railway.app/' +
      this.filterGallery[this.currentIndex].thumbnail;
  }
}

