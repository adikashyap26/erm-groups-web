import { Component } from '@angular/core';
import { ResponsiveService } from '../../service/responsive.service';
import { RouterModule, Router } from '@angular/router';
import { NgIf, NgFor } from '@angular/common';
import { HttpService } from '../../service/http.service';
import { map } from 'rxjs';


@Component({
  selector: 'app-responsive-header',
  standalone: true,
  imports: [NgIf, NgFor, RouterModule],
  templateUrl: './responsive-header.component.html',
  styleUrl: './responsive-header.component.scss'
})
export class ResponsiveHeaderComponent {
  isSubMenuOpen = false;
  isAboutUsOpen = false;
  isMiningUsOpen = false;
  isCompaniesUsOpen = false;
  isCsrOpen = false;
  miningData: any;
  miningListUrl = '/api/mining/miningCategory';
  companyCategoryUrl = '/api/company/companyListCategory';
  companyData: any;

  constructor(public sidenavService: ResponsiveService,private router: Router,  private http: HttpService){}

  ngOnInit(){
    this.onLoadMining();
    this.onLoadCompanies();
  }

  onClickProduct(){
    this.isSubMenuOpen = !this.isSubMenuOpen;
  }

  toggleAboutUsDropdown() {
    this.isAboutUsOpen = !this.isAboutUsOpen;
  }

  toggleMiningDropdown() {
    this.isMiningUsOpen = !this.isMiningUsOpen;
  }

  toggleCompaniesDropdown(){
    this.isCompaniesUsOpen = !this.isCompaniesUsOpen;
  }


  toggleCsrDropdown(){
    this.isCsrOpen = !this.isCsrOpen;
  }

    onLoadMining() {
      this.http.get(this.miningListUrl).pipe(map((response: any) => {
        return response.map((item: any) => ({
          name: item.sub_title,
          url: item.url
        }));
      })).subscribe(filteredData => {
        this.miningData = filteredData;
      });
    }
  
  
    onLoadCompanies() {
      this.http.get(this.companyCategoryUrl).pipe(map((response: any) => {
        return response.map((item: any) => ({
          name: item.title,
          url: item.url
        }));
      })).subscribe(filteredData => {
        this.companyData = filteredData;
      });
    }
}
