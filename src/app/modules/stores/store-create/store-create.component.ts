import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-store-create',
  templateUrl: './store-create.component.html',
  styleUrls: ['./store-create.component.css']
})
export class StoreCreateComponent {
  constructor(private router: Router) {}

  ngOnInit(): void {
  }



  goBack() {
    this.router.navigate(['/store-list']); // หรือใช้ this.router.navigateByUrl('/path-to-go');
    // หากต้องการย้อนกลับไปยังหน้าก่อนหน้าในประวัติการเรียกดู
    // this.router.navigate(['/']); สำหรับการนำทางไปยังหน้ารากหรือหน้าอื่น
  }

}
