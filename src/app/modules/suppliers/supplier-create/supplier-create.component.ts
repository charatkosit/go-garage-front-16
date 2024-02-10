import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-supplier-create',
  templateUrl: './supplier-create.component.html',
  styleUrls: ['./supplier-create.component.css']
})
export class SupplierCreateComponent {
  constructor(private router: Router) {}

  ngOnInit(): void {
  }

  goBack() {
    this.router.navigate(['/supplier-list']); // หรือใช้ this.router.navigateByUrl('/path-to-go');
    // หากต้องการย้อนกลับไปยังหน้าก่อนหน้าในประวัติการเรียกดู
    // this.router.navigate(['/']); สำหรับการนำทางไปยังหน้ารากหรือหน้าอื่น
  }
}
