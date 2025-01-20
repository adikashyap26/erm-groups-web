import { NgFor, CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { HttpService } from '../../../../service/http.service';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  dataUrl = '/api/home/cta'
  data: any;

  constructor(private http: HttpService, private router: Router) { }

  ngOnInit() {
    this.http.get(this.dataUrl).subscribe(response => {
      this.data = response;
      console.log(this.data)
    })
  }

  onClickButton(url:any){
    this.router.navigate([url]);
    window.scrollTo(0,0)
  }

  marquee = [
    {
      title: 'mining'
    },
    {
      title: 'industry'
    },
    {
      title: 'mining'
    }
  ]
}
