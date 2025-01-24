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
     document.body.style.overflowY = 'hidden'
  }

  hide() {
    this.loadingSubject.next(false);
    document.body.style.overflowY = 'auto';
  }
}
