import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { UserserviceService } from 'src/app/services/userservice.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss']
})
export class UserRegistrationComponent {
  addUserForm !: FormGroup;
  ckForm = false;
  constructor(private router: Router,private _fb: FormBuilder, private services: UserserviceService,) { }

  ngOnInit(): void {
    this.addUserForm = this._fb.group({
      name: ['',Validators.required],
      email: ['',Validators.required],
      password:['',Validators.required],
    });
  }
  submit() {
    if (this.addUserForm.invalid) {
      this.ckForm = true;
      return
    } else {
      try {
        console.log("Add User",this.addUserForm.value);
        this.services.addUser(this.addUserForm.value).subscribe((res: any) => {
          console.log(res)
          this.router.navigate(['/sign-in/signin'])
        },
        )
      } catch (err) {
        console.log(err)
     }
    }
  }
}
