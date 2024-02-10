import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent {
  constructor(private router: Router) {}

  ngOnInit(): void {
  }



  goBack() {
    this.router.navigate(['/customer-list']); // หรือใช้ this.router.navigateByUrl('/path-to-go');
    // หากต้องการย้อนกลับไปยังหน้าก่อนหน้าในประวัติการเรียกดู
    // this.router.navigate(['/']); สำหรับการนำทางไปยังหน้ารากหรือหน้าอื่น
  }
}
