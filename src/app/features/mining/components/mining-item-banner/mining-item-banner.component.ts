import { Component, Input } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NgIf, TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-mining-item-banner',
  standalone: true,
  imports: [NgIf, RouterModule, TitleCasePipe],
  templateUrl: './mining-item-banner.component.html',
  styleUrl: './mining-item-banner.component.scss'
})
export class MiningItemBannerComponent {
 data: any;
  responseData: any;
  filterData: any;
  companyData: any;
  filteredCompanyData: any;
  @Input() urlId: any;

  constructor(private activateRoute: ActivatedRoute, private http: HttpClient){}

  ngOnInit(){ 
  }

}
