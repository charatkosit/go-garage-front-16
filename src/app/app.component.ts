import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'go-garage-front-16';
  authenticated = true;
  posMode = true;
  isLoggedIn!: boolean;
 
  
  constructor(private auth: AuthService) {}
  ngOnInit(): void {
    
  }

  ngOnDestroy(): void {
    }
}
