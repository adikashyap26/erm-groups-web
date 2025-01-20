import { Component, Input } from '@angular/core';
import { HttpService } from '../../../../service/http.service';
import { ActivatedRoute } from '@angular/router';
import { response } from 'express';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-cs-inner-about',
  standalone: true,
  imports: [NgIf],
  templateUrl: './cs-inner-about.component.html',
  styleUrl: './cs-inner-about.component.scss'
})
export class CsInnerAboutComponent {
  @Input() aboutId: any;
  csraboutUrl = '/api/csr/csrInnerAboutUs';
  crAboutData: any;
  dataId: any;
  filtercsrAbout: any;

  constructor(private http: HttpService, private activateRoute: ActivatedRoute){}

  ngOnInit(){
    this.activateRoute.paramMap.subscribe((param) => {
      this.dataId = param.get('url')
      this.onLoadAbout(param.get('url'));
    })
  }

  onLoadAbout(url: any){
    this.http.get(this.csraboutUrl).subscribe(response => {
      this.crAboutData = response;
      this.filtercsrAbout = this.crAboutData.find((p: any) => p.csrListId === url);
    })
  }

}
