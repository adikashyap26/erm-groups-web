import { Component } from '@angular/core';
import { HttpService } from '../../../../service/http.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-csr-impact',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './csr-impact.component.html',
  styleUrl: './csr-impact.component.scss'
})
export class CsrImpactComponent {
impactUrl = '/api/csr/csrImpactInNumbers'
  impactData: any;

  constructor(private http: HttpService){}

  ngOnInit(){
    this.http.get(this.impactUrl).subscribe(response => {
      this.impactData = response;
    })
  }
}
