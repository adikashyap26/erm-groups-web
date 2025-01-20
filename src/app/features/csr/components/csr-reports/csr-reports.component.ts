import { Component } from '@angular/core';
import { HttpService } from '../../../../service/http.service';
import { NgFor, NgIf } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-csr-reports',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './csr-reports.component.html',
  styleUrl: './csr-reports.component.scss'
})
export class CsrReportsComponent {
  reportsUrl = '/api/csr/csrReports'
  reportsData: any;
  pdfData: any;
  filterReport: any;

  constructor(private http: HttpService, private router: Router) { }

  ngOnInit() {
    this.http.get(this.reportsUrl).subscribe(response => {
      this.reportsData = response;
    })
  }

  onClickDonwload(id: any){
    this.filterReport = this.reportsData.find((p: any) => p._id === id);
    this.pdfData = `https://erm-backend-deploy-production.up.railway.app/${this.filterReport.filesData}`
    window.open(this.pdfData, '_blank')
  }

  onClickViewReport(){
    this.router.navigate(['/reports']);
    window.scrollTo(0, 0)
  }
}
