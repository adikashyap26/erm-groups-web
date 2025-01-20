import { Component } from '@angular/core';
import { HttpService } from '../../../../service/http.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-mining-about',
  standalone: true,
  imports: [NgIf],
  templateUrl: './mining-about.component.html',
  styleUrl: './mining-about.component.scss'
})
export class MiningAboutComponent {
  miningUrl = '/api/mining/miningDescription'
  miningData: any;

  constructor(private http: HttpService) { }

  ngOnInit() {
    this.http.get(this.miningUrl).subscribe(response => {
      this.miningData = response;
    })
  }
}
