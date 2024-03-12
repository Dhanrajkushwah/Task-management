import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { routes } from 'src/app/core/helpers/routes';
import { ServiceService } from '../authservice/service.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent {
  public routes = routes;
  password = false;
  show = false;
  form = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  get f() {
    return this.form.controls;
  }

  constructor(private route: Router, private authservice: ServiceService) { }

  submit() {
    if (this.form.invalid) {
      return
    } else {
      this.authservice.login(this.form.value).subscribe({
        next: (res: any) => {
          console.log(res)
          if (res.role === 'superadmin') {
            sessionStorage.setItem("superadmin-token", res.token)
            sessionStorage.setItem('superadmin_id', res._id);
            this.route.navigateByUrl("/super-admin/dashboard", {replaceUrl: true})
          }
          else if (res.role === 'admin') {
            sessionStorage.setItem("admin-token", res.token)
            sessionStorage.setItem("admin-department", res.department)
            sessionStorage.setItem('admin_id', res._id);
            this.route.navigateByUrl("/admin/dashboard", {replaceUrl: true})
          } else if (res.role === 'user') {
            sessionStorage.setItem("user-token", res.token)
            sessionStorage.setItem("user-department", res.department)
            sessionStorage.setItem('user_id', res._id);
            this.route.navigateByUrl("/user/dashboard", {replaceUrl: true})
          } else {
            console.error('login err')
          }
        },
        error: (err) => {
          console.log(err)
        },
      }
      )
    }
  }
  onClick() {
    this.password = !this.password
    this.show = !this.show
  }

  onChanges(data: string) {
    if (data === 'Super-Admin') {
      this.form.controls['email'].setValue('superadmin@gmail.com');
      this.form.controls['password'].setValue('superadmin');
    } else if (data === 'Admin') {
      this.form.controls['email'].setValue('kiaantechnology@gmail.com');
      this.form.controls['password'].setValue('123456');
    }  else if (data === 'User') {
      this.form.controls['email'].setValue('user@gmail.com');
      this.form.controls['password'].setValue('user');
    }

  }
}
