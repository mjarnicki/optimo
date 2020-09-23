import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogInService {

  sidebarVisible = new Subject<boolean>();

  formValue = new Subject<string>();

  showModal(): Observable<boolean> {
    this.sidebarVisible.next(true);
    return this.sidebarVisible.asObservable();
  }

  hideModal(): Observable<boolean> {
    this.sidebarVisible.next(false);
    return this.sidebarVisible.asObservable();
  }

  logIn() {
    alert("zalogowano")
  }

  resetForm(): Observable<string> {
    this.hideModal();
    this.formValue.next('')
    return this.formValue.asObservable();
  }
}
