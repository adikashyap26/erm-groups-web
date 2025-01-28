import { Component } from '@angular/core';
import { HttpService } from '../../../../service/http.service';
import { NgFor, NgIf } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-our-ethics',
  standalone: true,
  imports: [NgIf, NgFor,MatButtonModule,MatIconModule],
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
