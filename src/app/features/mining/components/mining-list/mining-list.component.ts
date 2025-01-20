import { NgFor, NgIf, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../../../../service/http.service';

@Component({
  selector: 'app-mining-list',
  standalone: true,
  imports: [NgFor, NgStyle, NgIf],
  templateUrl: './mining-list.component.html',
  styleUrl: './mining-list.component.scss'
})
export class MiningListComponent {
  miningUrl = '/api/mining/miningDescription'
  miningData: any;
  miningListUrl = '/api/mining/miningCategory'
  miningListData: any;


  constructor(private router: Router, private http: HttpService) { }

  ngOnInit() {
    this.onLoadMining();
    this.onLoadMiningList();
  }

  onLoadMining(){
    this.http.get(this.miningUrl).subscribe(response => {
      this.miningData = response;
    })
  }

  onLoadMiningList(){
    this.http.get(this.miningListUrl).subscribe(response => {
      this.miningListData = response;
    })
  }

  onClickViewMine(url: any) {
    window.scrollTo(0, 0)
    this.router.navigate(['/mining', url])
  }

}
