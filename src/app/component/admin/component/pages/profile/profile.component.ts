import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin-service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profileForm !: FormGroup;
  ckForm = false;
  removeClass = true;
  document!: File;
  imagesBox = '../../../../../../assets/img/product/product1.jpg'
  admin_id
  companybyIdData: any
  constructor(
    private _fb: FormBuilder,
    private adminservice: AdminService,
    private _routes: Router,
  ) { 
    this.admin_id = sessionStorage.getItem("admin_id");

  }

  ngOnInit(): void {
    this.profileForm = this._fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      companyId:[this.admin_id],
    });
    
  }


  onSubmit() {
    if (this.profileForm.invalid) {
      this.ckForm = true;
      return
    } else {
      try {
        this.adminservice.addProfile(this.profileForm.value).subscribe({
          next: (res) => {
              this._routes.navigate(['/admin/profile'])
          },
          error: (err) => {
            console.log(err)
          },
        })

      } catch (e) {
        console.log(e)
      }
    }
  }


  removeBtn() {
    this.removeClass = !this.removeClass;
  }
  cancel(){
    this._routes.navigate(['/admin/task'])

  }
}
