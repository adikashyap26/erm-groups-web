import { Component } from '@angular/core';
import { CareerBannerComponent } from './components/career-banner/career-banner.component';
import { CareerFormComponent } from './components/career-form/career-form.component';

@Component({
  selector: 'app-career',
  standalone: true,
  imports: [
    CareerBannerComponent,
    CareerFormComponent
  ],
  templateUrl: './career.component.html',
  styleUrl: './career.component.scss'
})
export class CareerComponent {

}
