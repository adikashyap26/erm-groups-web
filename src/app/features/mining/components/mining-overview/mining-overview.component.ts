import { NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { HttpService } from '../../../../service/http.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-mining-overview',
  standalone: true,
  imports: [NgIf, NgFor, UpperCasePipe, RouterModule],
  templateUrl: './mining-overview.component.html',
  styleUrl: './mining-overview.component.scss'
})
export class MiningOverviewComponent {
  @Input() urlId: any;
  miningInnerUrl = '/api/mining/miningCategory';
  miningListData: any;
  reportsUrl = '/api/mining/miningReportsByMiningUrl';
  reportsData: any;
  reportPdf: any;
  pdfData: any;
  activeUrl: string | null = null;
  filterReportData: any;
  activeMiningUrl: any;

  constructor(private http: HttpService, private router: Router, private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    this.onLoadMininglist();

    if (this.urlId) {
      this.activeUrl = this.urlId[0].miningUrlId;
    }
    this.activateRoute.paramMap.subscribe((paramMap) => {
      this.activeMiningUrl = paramMap.get('url');
      this.onLoadReports(this.activeMiningUrl);
      if (this.activeMiningUrl) {
        this.activeUrl = this.activeMiningUrl;
      }
    });
  }

  onLoadMininglist() {
    this.http.get(this.miningInnerUrl).subscribe(response => {
      this.miningListData = response;
    })
  }

  onLoadReports(url: any) {
    let urlId = this.reportsUrl + '/' + url;
    this.http.get(urlId).subscribe(response => {
      this.reportsData = response;
      console.log(this.reportsData)

    })
  }

  onClickMine(url: string) {
    this.activeUrl = url;
    this.router.navigate(['mining', url])
  }

  onClickReport(id: any) {
    this.reportPdf = this.reportsData.find((p: any) => p._id === id)
    this.pdfData = `https://erm-backend-deploy-production.up.railway.app/${this.reportPdf.filesData}`
    window.open(this.pdfData, '_blank')
  }
}
