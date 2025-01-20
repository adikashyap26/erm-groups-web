import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../../../../service/http.service';

@Component({
  selector: 'app-company-list',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './company-list.component.html',
  styleUrl: './company-list.component.scss'
})
export class CompanyListComponent {
  data: any;
  responseData: any;
  companyData: any;
  companyListUrl = '/api/company/companyList'
  companyListData: any;
  companyCategoryUrl = '/api/company/companyListCategory'
  companyCategoryData: any;

  constructor(private http: HttpService, private router: Router) { }

  ngOnInit() {
    this.onLoadCompanyList()
    this.onLoadCompanyCategoryList()
  }

  onLoadCompanyList() {
    this.http.get(this.companyListUrl).subscribe((response) => {
      this.companyListData = response;
    });
  }

  onLoadCompanyCategoryList(){
    this.http.get(this.companyCategoryUrl).subscribe(response => {
      this.companyCategoryData = response;
    })
  }

  onClickCompany(url: any){
    this.router.navigate(['/companies', url])
    window.scrollTo(0,0);
  }

}