import { NgIf } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [NgIf],
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss'
})


export class MapComponent implements OnChanges  {
  @Input() mapDetail: any;
  sanitizedMapUrl!: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['mapDetail'] && this.mapDetail?.[0]?.map_url) {
      this.sanitizedMapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.mapDetail[0].map_url);
    }
  }
}