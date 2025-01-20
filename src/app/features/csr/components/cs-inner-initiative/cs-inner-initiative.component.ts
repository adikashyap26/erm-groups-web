import { Component, Input } from '@angular/core';
import { HttpService } from '../../../../service/http.service';
import { ActivatedRoute } from '@angular/router';
import { NgFor, NgIf, NgStyle } from '@angular/common';

@Component({
  selector: 'app-cs-inner-initiative',
  standalone: true,
  imports: [NgIf, NgFor, NgStyle],
  templateUrl: './cs-inner-initiative.component.html',
  styleUrl: './cs-inner-initiative.component.scss'
})
export class CsInnerInitiativeComponent {
  csrInitiativeUrl = '/api/csr/csrInitivates';
  crInitiativeData: any;
  dataId: any;
  filtercsrInitiative: any;

  constructor(private http: HttpService, private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activateRoute.paramMap.subscribe((param) => {
      this.dataId = param.get('url')
      this.onLoadInitiative(param.get('url'));
    })
  }

  onLoadInitiative(url: any) {
    this.http.get(this.csrInitiativeUrl).subscribe(response => {
      this.crInitiativeData = response;
      this.filtercsrInitiative = this.crInitiativeData.find((p: any) => p.csrListId === url);
    })
  }
}
