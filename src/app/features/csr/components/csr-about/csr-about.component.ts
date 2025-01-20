import { Component } from '@angular/core';
import { HttpService } from '../../../../service/http.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-csr-about',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './csr-about.component.html',
  styleUrl: './csr-about.component.scss'
})
export class CsrAboutComponent {

  aboutUrl = '/api/csr/csrAboutUs'
  aboutData: any;

  constructor(private http: HttpService) { }

  ngOnInit() {
    this.http.get(this.aboutUrl).subscribe(response => {
      this.aboutData = response;
    })
  }
}
