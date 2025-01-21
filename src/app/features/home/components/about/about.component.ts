import { NgFor, CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HttpService } from '../../../../service/http.service';
import { NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NgFor, NgIf, RouterModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  dataUrl = '/api/home/homeAboutUs'
  data: any;

  constructor(private http: HttpService) { }

  ngOnInit() {
    this.http.get(this.dataUrl).subscribe(response => {
      this.data = response;
    })
  }
}
