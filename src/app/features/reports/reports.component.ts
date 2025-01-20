import { Component } from '@angular/core';
import { ReportsBannerComponent } from './components/reports-banner/reports-banner.component';
import { ReportsListComponent } from './components/reports-list/reports-list.component';

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [
    ReportsBannerComponent,
    ReportsListComponent
  ],
  templateUrl: './reports.component.html',
  styleUrl: './reports.component.scss'
})
export class ReportsComponent {

}
