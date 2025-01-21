import { NgIf, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { HttpService } from '../../service/http.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, NgIf, NgFor],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  showDropdown: boolean = false;
  miningData: any;
  miningListUrl = '/api/mining/miningCategory';
  companyCategoryUrl = '/api/company/companyListCategory';
  companyData: any;
  isDropdownOpen: boolean = true;


  constructor(private router: Router, private http: HttpService) { }

  ngOnInit() {
    this.onLoadMining();
    this.onLoadCompanies();
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

  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  closeDropdown(): void {
    this.isDropdownOpen = false;
  }

  openDropdown(): void {
    this.isDropdownOpen = true;
  }
}
