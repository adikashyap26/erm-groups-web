
import { NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { url } from 'inspector';

@Component({
  selector: 'app-company-item-banner',
  standalone: true,
  imports: [NgIf, RouterModule],
  templateUrl: './company-item-banner.component.html',
  styleUrl: './company-item-banner.component.scss'
})
export class CompanyItemBannerComponent {
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
