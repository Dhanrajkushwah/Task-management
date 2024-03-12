import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../authservice/service.service';
import { routes } from 'src/app/core/helpers/routes';
@Component({
  selector: 'app-user-signin',
  templateUrl: './user-signin.component.html',
  styleUrls: ['./user-signin.component.scss']
})
export class UserSigninComponent {
  addUserForm !: FormGroup;
  ckForm = false;
  public routes = routes;
  constructor(private router: Router,private _fb: FormBuilder, private authservice: ServiceService) { }
  ngOnInit(): void {
    this.addUserForm = this._fb.group({
      email: ['',Validators.required],
      password:['',Validators.required],
    });
  }
  submit() {
    if (this.addUserForm.invalid) {
      this.ckForm = true;
      return
    } else {
      this.authservice.login(this.addUserForm.value).subscribe({
        next: (res: any) => {
          console.log(res)
          if (res.role === 'superadmin') {
            sessionStorage.setItem("superadmin-token", res.token)
            sessionStorage.setItem('superadmin_id', res._id);
            this.router.navigateByUrl("/super-admin/dashboard", {replaceUrl: true})
          }
          else if (res.role === 'admin') {
            sessionStorage.setItem("admin-token", res.token)
            sessionStorage.setItem("admin-department", res.department)
            sessionStorage.setItem('admin_id', res._id);
            this.router.navigateByUrl("/admin/dashboard", {replaceUrl: true})
          } else if (res.role === 'user') {
            sessionStorage.setItem("user-token", res.token)
            sessionStorage.setItem("user-department", res.department)
            sessionStorage.setItem('user_id', res._id);
            this.router.navigateByUrl("/user/dashboard", {replaceUrl: true})
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

}
