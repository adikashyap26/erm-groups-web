import { Component } from '@angular/core';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { ContactBannerComponent } from './components/contact-banner/contact-banner.component';
import { MapComponent } from './components/map/map.component';
import { NgFor, NgIf } from '@angular/common';
import { HttpService } from '../../service/http.service';

@Component({
  selector: 'app-contactus',
  standalone: true,
  imports: [
    ContactBannerComponent,
    ContactFormComponent,
    MapComponent,
    NgFor,
    NgIf
  ],
  templateUrl: './contactus.component.html',
  styleUrl: './contactus.component.scss'
})
export class ContactusComponent {
  Url = '/api/contact/contactDetail'
  data: any;

  constructor(private http: HttpService){}

  ngOnInit(){
    this.http.get(this.Url).subscribe(response => {
      this.data = response;
    })
  }
}
