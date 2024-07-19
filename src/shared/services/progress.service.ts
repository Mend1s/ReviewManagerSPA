import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProgressService {
  private progressSubject = new BehaviorSubject<boolean>(false);
  public progress$ = this.progressSubject.asObservable();

  show() {
    this.progressSubject.next(true);
  }

  hide() {
    this.progressSubject.next(false);
  }
}
