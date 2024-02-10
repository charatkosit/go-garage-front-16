import { Component } from '@angular/core';
import { WebstorageService } from 'src/app/services/webstorage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private storage: WebstorageService) { }

  ngOnInit(): void {
  }
  logout(){
    this.storage.Logout();

  }
}
