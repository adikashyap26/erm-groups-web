import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { HttpService } from '../../../../service/http.service';

@Component({
  selector: 'app-team-banner',
  standalone: true,
  imports: [NgIf],
  templateUrl: './team-banner.component.html',
  styleUrl: './team-banner.component.scss'
})
export class TeamBannerComponent {
bannerUrl = '/api/ourTeam/ourTeamBanner'
  bannerData: any;

  constructor(private http: HttpService){}

  ngOnInit(){
    this.http.get(this.bannerUrl).subscribe(response => {
      this.bannerData = response;
      console.log(this.bannerData)
    })
  }
}
