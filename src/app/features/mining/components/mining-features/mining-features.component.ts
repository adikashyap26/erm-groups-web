import { Component, Input } from '@angular/core';
import { HttpService } from '../../../../service/http.service';
import { NgFor, NgIf } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mining-features',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './mining-features.component.html',
  styleUrl: './mining-features.component.scss'
})
export class MiningFeaturesComponent {
  miningFeatureUrl = '/api/mining/miningFeature'
  miningFeatureData: any;
  filterMiningData: any;
  dataId: any;
  filterScientificOperations: any;
  filterminenvironment: any;
  filterRehabilitation: any;
  reportsUrl = '/api/mining/miningReports';
  reportsData: any;
  reportPdf: any;
  pdfData: any;

  constructor(private http: HttpService, private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activateRoute.paramMap.subscribe((param) => {
      this.dataId = param.get('url')
      if (this.dataId) {
        this.onLoadMiningFeatures(param.get('url'));
      }
      this.onLoadReports()
    })
  }

  onLoadMiningFeatures(url: any) {
    this.http.get(this.miningFeatureUrl).subscribe(response => {
      this.miningFeatureData = response;
      this.filterMiningData = this.miningFeatureData.filter((p: any) => p.miningUrlId === url)
      this.filterScientificOperations = this.filterMiningData[0];
      this.filterminenvironment = this.filterMiningData[1];
      this.filterRehabilitation = this.filterMiningData[2];
    })
  }

  onLoadReports() {
    this.http.get(this.reportsUrl).subscribe(response => {
      this.reportsData = response;
    })
  }

  onClickReport(id: any) {
    this.reportPdf = this.reportsData.find((p: any) => p._id === id)
    this.pdfData = `https://erm-backend-deploy-production.up.railway.app/${this.reportPdf.filesData}`
    window.open(this.pdfData, '_blank')
  }
}
