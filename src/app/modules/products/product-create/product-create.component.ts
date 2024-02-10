import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent {
  constructor(private router: Router) {}

  ngOnInit(): void {
  }

  goBack() {
    this.router.navigate(['/product-list']); // หรือใช้ this.router.navigateByUrl('/path-to-go');
    // หากต้องการย้อนกลับไปยังหน้าก่อนหน้าในประวัติการเรียกดู
    // this.router.navigate(['/']); สำหรับการนำทางไปยังหน้ารากหรือหน้าอื่น
  }
}
