import { Component } from '@angular/core';
import { CompanyBannerComponent } from './components/company-banner/company-banner.component';
import { CompanyListComponent } from './components/company-list/company-list.component';
import { CompanyItemComponent } from './components/company-item/company-item.component';
import { CompanyItemBannerComponent } from './components/company-item-banner/company-item-banner.component';

@Component({
  selector: 'app-company',
  standalone: true,
  imports: [
      CompanyBannerComponent,
      CompanyListComponent,
      CompanyItemComponent,
      CompanyItemBannerComponent,
    ],
  templateUrl: './company.component.html',
  styleUrl: './company.component.scss'
})
export class CompanyComponent {

}
