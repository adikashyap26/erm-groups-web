import { ChangeDetectorRef,SimpleChanges, Component, ElementRef, Input, ViewChild } from '@angular/core';
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
  isLightboxOpen = false;
  currentImage = '';
  currentIndex = 0;

  constructor(private http: HttpService, private activateRoute: ActivatedRoute, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.activateRoute.paramMap.subscribe((param) => {
      this.dataId = param.get('url')
      this.loadGalleryData(param.get('url'));
    })
  }

    ngOnChanges(changes: SimpleChanges) {
      if (changes['url'] && this.dataId) {
        this.loadGalleryData(this.dataId);
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
    this.http.get(this.csrGalleryUrl).subscribe(
      (response:any) => {
        this.galleryData = response;
          this.filterGallery = this.galleryData.filter((p: any) => p.csrListId === url);
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
