import { NgFor, CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { HttpService } from '../../../../service/http.service';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-explore',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './explore.component.html',
  styleUrl: './explore.component.scss'
})
export class ExploreComponent {
dataUrl = '/api/home/exploreOurPremiumBrand'
  data: any;

  constructor(private http: HttpService, private router: Router) { }

  ngOnInit() {
    this.http.get(this.dataUrl).subscribe(response => {
      this.data = response;
    })
  }

  onClickButton(url:any){
    this.router.navigate([url]);
    window.scrollTo(0,0)
  }
}
