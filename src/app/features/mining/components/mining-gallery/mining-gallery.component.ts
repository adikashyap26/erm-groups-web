import { AfterViewChecked, AfterViewInit, ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import { HttpService } from '../../../../service/http.service';
import lightGallery from 'lightgallery';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import { ActivatedRoute } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-mining-gallery',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './mining-gallery.component.html',
  styleUrl: './mining-gallery.component.scss'
})
export class MiningGalleryComponent implements AfterViewInit{

  @ViewChild('galleryContainer', { static: false }) galleryContainer!: ElementRef;
  miningGalleryUrl = '/api/mining/miningGallery';
  galleryData: any;
  filterGallery: any;
  dataId: any;

  settings = {
    counter: true,
    download: false,
    plugins: [lgThumbnail]
  }
  private galleryInitialized = false; 

  constructor(private http: HttpService, private activateRoute: ActivatedRoute,  private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.activateRoute.paramMap.subscribe((param) => {
      this.dataId = param.get('url')
      if (this.dataId) {
        this.OnLoadMiningGallery(param.get('url'));
      }
    })
  }

  ngAfterViewInit() {
    setTimeout(() => {
      if (this.filterGallery && !this.galleryInitialized) {
        this.initializeGallery();
      }
    }, 0);
  }

  OnLoadMiningGallery(url: any) {
    this.http.get(this.miningGalleryUrl).subscribe(response => {
      this.galleryData = response;
      this.filterGallery = this.galleryData.filter((p: any) => p.miningUrlId === url)
      // console.log(this.filterGallery)
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
