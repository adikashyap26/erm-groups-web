import { NgFor, CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { HttpService } from '../../service/http.service';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [NgFor],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  dataUrl = '/api/home/footer'
  data: any;

  constructor(private http: HttpService, private router: Router) { }

  ngOnInit() {
    this.http.get(this.dataUrl).subscribe(response => {
      this.data = response;
    })
  }

  onClicklinks(url:any){
    this.router.navigate([url]);
    window.scrollTo(0,0)
  }

  onClickCompany(url:any){
    this.router.navigate([url]);
    window.scrollTo(0,0)
  }
}
