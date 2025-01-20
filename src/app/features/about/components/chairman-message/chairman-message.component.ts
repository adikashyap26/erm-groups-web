import { Component } from '@angular/core';
import { HttpService } from '../../../../service/http.service';
import { CommonModule, NgIf, NgStyle } from '@angular/common';

@Component({
  selector: 'app-chairman-message',
  standalone: true,
  imports: [NgIf, NgStyle],
  templateUrl: './chairman-message.component.html',
  styleUrl: './chairman-message.component.scss'
})
export class ChairmanMessageComponent {

  messageUrl = '/api/about/chairman';
  messageData: any;

  constructor(private http: HttpService){}

  ngOnInit(){
    this.http.get(this.messageUrl).subscribe(response => {
      this.messageData = response;
    })
  }
}
