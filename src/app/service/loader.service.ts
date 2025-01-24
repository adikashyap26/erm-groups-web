import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  private loadingSubject = new BehaviorSubject<boolean>(false);
  public loading$ = this.loadingSubject.asObservable();

  show() {
    this.loadingSubject.next(true);
    if (typeof document !== 'undefined') {
      document.body.style.overflowY = 'hidden';
    }
  }

  hide() {
    this.loadingSubject.next(false);
    if (typeof document !== 'undefined') {
      document.body.style.overflowY = 'auto';
    }
  }
}
