import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResponsiveService {
  isResponsiveOpen = new BehaviorSubject<boolean>(false);
  
  constructor() { }

  openResponsive() {
    this.isResponsiveOpen.next(true);
  }

  closeResponsive() {
    this.isResponsiveOpen.next(false);
  }
}
