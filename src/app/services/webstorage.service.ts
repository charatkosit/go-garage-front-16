import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class WebstorageService {

  constructor(private router: Router) {}

  public login(): void {
    localStorage.setItem('authenticated', 'true');
    this.router.navigate(['/user-dashboard']);
  }
  public submit(): void {
    localStorage.setItem('authenticated', 'true');
    this.router.navigate(['/user-dashboard']);
  }
  public Logout(): void {
    localStorage.removeItem('authorized');
    localStorage.removeItem('loginTime');
    localStorage.setItem('authenticated', 'false');
    this.router.navigate(['/login']);
  }
}
