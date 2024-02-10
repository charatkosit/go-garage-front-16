import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cate-create',
  templateUrl: './cate-create.component.html',
  styleUrls: ['./cate-create.component.css']
})
export class CateCreateComponent {
  constructor(private router: Router) {}

  ngOnInit(): void {
  }



  goBack() {
    this.router.navigate(['/cate-list']); // หรือใช้ this.router.navigateByUrl('/path-to-go');
    // หากต้องการย้อนกลับไปยังหน้าก่อนหน้าในประวัติการเรียกดู
    // this.router.navigate(['/']); สำหรับการนำทางไปยังหน้ารากหรือหน้าอื่น
  }
}
