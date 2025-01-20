import { Component } from '@angular/core';
import { GalleryComponent } from '../gallery/gallery.component';
import { CompanyItemBannerComponent } from '../company-item-banner/company-item-banner.component';
import { ActivatedRoute } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { HttpService } from '../../../../service/http.service';

@Component({
  selector: 'app-company-item',
  standalone: true,
  imports: [
    CompanyItemBannerComponent,
    GalleryComponent,
    NgIf, NgFor
  ],
  templateUrl: './company-item.component.html',
  styleUrl: './company-item.component.scss'
})
export class CompanyItemComponent {
  data: any;
  responseData: any;
  filterData: any;
  companyData: any;
  filteredCompanyData: any;
  companyInnerUrl = '/api/company/companyInnerByUrl'
  dataId:any;


  constructor(private activateRoute: ActivatedRoute, private http: HttpService){}

  ngOnInit(){
    this.activateRoute.paramMap.subscribe((param) => {
      this.dataId = param.get('url')
      this.onLoadCompany(param.get('url'));
    
    })
  }


  onLoadCompany(url: any){
    let urlData = this.companyInnerUrl + '/' + url
    this.http.get(urlData).subscribe((response) => {
      this.data = response;
      console.log(this.data)
    })
  }
}
