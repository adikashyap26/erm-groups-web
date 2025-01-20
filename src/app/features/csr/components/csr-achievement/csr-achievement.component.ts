import { Component } from '@angular/core';
import { HttpService } from '../../../../service/http.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-csr-achievement',
  standalone: true,
  imports: [NgIf],
  templateUrl: './csr-achievement.component.html',
  styleUrl: './csr-achievement.component.scss'
})
export class CsrAchievementComponent {
 achievementUrl = '/api/csr/csrAchievements'
  achievementData: any;

  constructor(private http: HttpService){}

  ngOnInit(){
    this.http.get(this.achievementUrl).subscribe(response => {
      this.achievementData = response;
    })
  }
}
