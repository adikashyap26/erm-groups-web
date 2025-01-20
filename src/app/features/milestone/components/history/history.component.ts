import { Component } from '@angular/core';
import { HttpService } from '../../../../service/http.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './history.component.html',
  styleUrl: './history.component.scss'
})
export class HistoryComponent {

  historyUrl = '/api/ourHistory/OurHistoryAchieved'
  historyData: any;

  constructor(private http: HttpService){}

  ngOnInit(){
    this.http.get(this.historyUrl).subscribe(response => {
      this.historyData = response;
    })
  }

}
