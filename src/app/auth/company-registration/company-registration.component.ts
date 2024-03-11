import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin-service';

@Component({
  selector: 'app-company-registration',
  templateUrl: './company-registration.component.html',
  styleUrls: ['./company-registration.component.scss']
})
export class CompanyRegistrationComponent {
  addCompanyRegistration!: FormGroup;
  ck: boolean = false;
  proimgs!: File

  imagesBox = '../../../../../../assets/img/product/product1.jpg'
  departmentData: any = [];
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: AdminService) { }

  ngOnInit(): void {
    this.addCompanyRegistration = this.fb.group({
      name: ['', [Validators.required, ]],
      email: ['', [Validators.required, ]],
      password: ['',Validators.required],
      image: ['', Validators.required],
      role: ['admin'],
    })
  }
  Onuploadpro(event: any) {
    if (event.target.files.length > 0) {
      this.proimgs = event.target.files[0];
    }
    if (event.target.files && event.target.files[0]) {
      const filesAmount = event.target.files.length;
      for (let i = 0; i < filesAmount; i++) {
        const reader = new FileReader();
        reader.onload = (event: any) => {
          this.imagesBox = event.target.result;
        }
        reader.readAsDataURL(event.target.files[i]);
      }
    }
  }

  addCompany() {
    if (this.addCompanyRegistration.invalid) {
      this.ck = true;
      return
    }
    else {
      const formData = new FormData();
      formData.append('email', this.addCompanyRegistration.value.email)
      formData.append('password', this.addCompanyRegistration.value.password)
      formData.append('name', this.addCompanyRegistration.value.name)
      formData.append('image', this.proimgs)
      this.service.addCompanyRegistration(formData).subscribe({
        next: (res) => {
          this.router.navigate(["/sign-in/signin"])
        },
        error: (err) => { console.log(err) }
      })
    }
  }
  cancelCoupan() {
    this.router.navigate(["/sign-in/signin"])
  }

}