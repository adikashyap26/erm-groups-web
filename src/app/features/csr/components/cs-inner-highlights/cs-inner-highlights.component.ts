import { Component, Input } from '@angular/core';
import { HttpService } from '../../../../service/http.service';
import { ActivatedRoute } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-cs-inner-highlights',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './cs-inner-highlights.component.html',
  styleUrl: './cs-inner-highlights.component.scss'
})
export class CsInnerHighlightsComponent {
  csrHighlightUrl = '/api/csr/csrInnerKey';
  crHighlightData: any;
  dataId: any;
  filtercsrHighlight: any;

  constructor(private http: HttpService, private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activateRoute.paramMap.subscribe((param) => {
      this.dataId = param.get('url')
      this.onLoadHighlight(param.get('url'));
    })
  }

  onLoadHighlight(url: any) {
    this.http.get(this.csrHighlightUrl).subscribe(response => {
      this.crHighlightData = response;
      this.filtercsrHighlight = this.crHighlightData.find((p: any) => p.csrListId === url);
    })
  }
}
