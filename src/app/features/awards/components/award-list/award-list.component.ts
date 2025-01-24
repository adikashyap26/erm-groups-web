import { Component } from '@angular/core';
import { HttpService } from '../../../../service/http.service';
import { NgClass, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-award-list',
  standalone: true,
  imports: [NgIf, NgFor, NgClass],
  templateUrl: './award-list.component.html',
  styleUrl: './award-list.component.scss'
})
export class AwardListComponent {
  awardDescriptionUrl = '/api/award/awardDescription'
  awardDescriptionData: any;
  awardcategoryUrl = '/api/award/awardCategory';
  awardCatgoryData: any;
  awardListUrl = '/api/award/awardLists';
  awardListData: any;
  filterAwardData: any;
  selectedYear: any;

  constructor(private http: HttpService) { }

  ngOnInit() {
   this.onLoadAwardDescription();
   this.onLoadAwardCategory();
  }

  onLoadAwardDescription(){
    this.http.get(this.awardDescriptionUrl).subscribe(response => {
      this.awardDescriptionData = response;
    })
  }

  onLoadAwardCategory(){
    this.http.get(this.awardcategoryUrl).subscribe(response => {
      this.awardCatgoryData = response;
      if(this.awardCatgoryData && this.awardCatgoryData.length > 0){
        this.onClickAwardYear(this.awardCatgoryData[0]._id)
      }
    })
  }

  onClickAwardYear(id: any){
    this.selectedYear = id
    this.http.get(this.awardListUrl).subscribe(response => {
      this.awardListData = response;
      this.filterAwardData = this.awardListData.filter((p: any) => p.yearId === id);
    })
  }
}
