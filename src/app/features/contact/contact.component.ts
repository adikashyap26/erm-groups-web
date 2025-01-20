import { Component } from '@angular/core';
import { ContactBannerComponent } from './components/contact-banner/contact-banner.component';
import { FormComponent } from './components/form/form.component';
import { MapComponent } from './components/map/map.component';
import { HttpService } from '../../service/http.service';
import { NgFor, NgIf } from '@angular/common';


@Component({
  selector: 'app-contact',
  standalone: true,
  
  imports: [
      ContactBannerComponent,
      FormComponent,
      MapComponent,
      NgFor,
      NgIf
    ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  Url = '/api/contact/contactDetail'
  data: any;

  constructor(private http: HttpService){}

  ngOnInit(){
    this.http.get(this.Url).subscribe(response => {
      this.data = response;
    })
  }
}
