import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { WebstorageService } from 'src/app/services/webstorage.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  socialLogin = false;
  password = '';
  show = false;

  form = new FormGroup({
    email: new FormControl('user@pos.com', [Validators.required]),
    password: new FormControl('12345', [Validators.required]),
  });

  get f() {
    return this.form.controls;
  }

  constructor(private storage: WebstorageService,
    private auth: AuthService) { }

  ngOnInit() {
    if (localStorage.getItem('authenticated')) {
      localStorage.removeItem('authenticated');
    }
  }


  submit() {
    if (this.form.valid) {
      this.storage.login();
      this.auth.login();
    } else {
      this.form.markAllAsTouched();
    }
  }

  onClickShowPassword() {
    if (this.password === 'password') {
      this.password = 'text';
      this.show = true;
    } else {
      this.password = 'password';
      this.show = false;
    }

  }
}
