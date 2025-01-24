import { Component } from '@angular/core';
import { HttpService } from '../../../../service/http.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-our-ethics',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './our-ethics.component.html',
  styleUrl: './our-ethics.component.scss'
})
export class OurEthicsComponent {

  ethicsUrl = '/api/about/ethics';
  ethicsData: any;

  constructor(private http: HttpService){}

  ngOnInit(){
    this.http.get(this.ethicsUrl).subscribe(response => {
      this.ethicsData = response;
    })
  }

}
