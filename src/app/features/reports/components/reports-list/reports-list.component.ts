import { Component } from '@angular/core';
import { HttpService } from '../../../../service/http.service';
import { NgFor, NgIf } from '@angular/common';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-reports-list',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './reports-list.component.html',
  styleUrl: './reports-list.component.scss'
})
export class ReportsListComponent {

  miningReportUrl = '/api/mining/miningReports';
  csrReportUrl = '/api/csr/csrReports'
  reportsData: any;
  miningReportData: any;
  csrReportData: any;
  filterReport: any;
  pdfData: any;
  originalReportsData: any[] = [];
  years: any;


  constructor(private http: HttpService) { }

  ngOnInit() {
    this.onLoadReports()
  }

  onLoadReports() {
    forkJoin({
      miningReport: this.http.get(this.miningReportUrl),
      csrReport: this.http.get(this.csrReportUrl)
    }).subscribe((response: any) => {
      const miningReportData = response.miningReport || [];
      const csrReportData = response.csrReport || [];
      const flattenedCsrReport = Array.isArray(csrReportData[0]) ? csrReportData[0] : csrReportData;
      this.reportsData = [...miningReportData, ...flattenedCsrReport];
      this.originalReportsData = [...this.reportsData];
      this.years = [...new Set(this.reportsData.map((item: any) => item.year))];
    });
  }



  onSelectYear(event: any) {
    const selectedYear = event.target.value;
    this.reportsData = selectedYear  ? this.originalReportsData.filter((item: any) => item.year === selectedYear) : [...this.originalReportsData];
  }

  onClickDownload(id: any) {
    this.filterReport = this.reportsData.find((p: any) => p._id === id);
    this.pdfData = `https://erm-backend-deploy-production.up.railway.app/${this.filterReport.filesData}`
    window.open(this.pdfData, '_blank')
  }

}
