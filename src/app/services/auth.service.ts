import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authenticated = new BehaviorSubject<boolean>(false);
  loggedIn$ = this.authenticated.asObservable();
 
 
  login() {
    localStorage.setItem('authenticated', 'true');
    //ถ้ามีการ login เข้ามาจะกำหหดให้ this.authentichated เป็น true
    this.authenticated.next(true);
  }

  logout() {
    localStorage.removeItem('authenticated');
    this.authenticated.next(false);
  }
}
