import { Component } from '@angular/core';
import { HttpService } from '../../../../service/http.service';
import { NgClass, NgFor, NgIf, TitleCasePipe } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-csr-work-areas',
  standalone: true,
  imports: [NgIf, NgFor, TitleCasePipe, NgClass],
  templateUrl: './csr-work-areas.component.html',
  styleUrl: './csr-work-areas.component.scss'
})
export class CsrWorkAreasComponent {
  csrworkUrl = '/api/csr/ourWorkDescription'
  csrworkData: any;
  workCategoryUrl = '/api/csr/ourWorkCategory'
  workCategoryData: any;
  categoryListUrl = '/api/csr/csrListCategory';
  categoryListData: any;
  filterCategoryData: any;
  selectedCategoryIndex: number = 0;
  categoryName:any;


  constructor(private http: HttpService,private activateRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.onLoadWorkArea();
    this.onLoadWorkCategory();
  }

  onLoadWorkArea() {
    this.http.get(this.csrworkUrl).subscribe(response => {
      this.csrworkData = response;
    })
  }

  onLoadWorkCategory() {
    this.http.get(this.workCategoryUrl).subscribe(response => {
      this.workCategoryData = response;
      if (this.workCategoryData.length > 0) {
        this.selectedCategoryIndex = 0;
        this.onClickCategory(this.workCategoryData[0].url, 0);

      }
    })
  }

  onClickCategory(id: any, index: number) {
    this.categoryName = id;
    this.selectedCategoryIndex = index;
    this.http.get(this.categoryListUrl).subscribe(response => {
      this.categoryListData = response;
      this.filterCategoryData = this.categoryListData.filter((p: any) => p.ourWorkId === id);

      if (this.filterCategoryData.length > 0) {
        this.filterCategoryData.forEach((item: any, i: number) => (item.isOpen = i === 0)); 
      }
    })
  }

  toggleSection(index: number): void {
    this.filterCategoryData.forEach((section: any, i: number) => {
      section.isOpen = i === index ? !section.isOpen : false;
    });
  }


  onClickCsrcatgory(url: any){
    if(this.categoryName){
      this.router.navigate(['csr', url]);
      window.scrollTo(0,0);
    }

  }
}
