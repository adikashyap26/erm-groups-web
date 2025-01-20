import { NgFor, CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { HttpService } from '../../service/http.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-call-to-action',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './call-to-action.component.html',
  styleUrl: './call-to-action.component.scss'
})
export class CallToActionComponent {
  dataUrl = '/api/home/newsLetter'
  data: any;

  constructor(private http: HttpService) { }

  ngOnInit() {
    this.http.get(this.dataUrl).subscribe(response => {
      this.data = response;
    })
  }
}
