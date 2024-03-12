import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin-service';

@Component({
  selector: 'app-add-rating',
  templateUrl: './add-rating.component.html',
  styleUrls: ['./add-rating.component.scss']
})
export class AddRatingComponent implements OnInit {
  addRatingForm !: FormGroup;
  ckForm = false;
  constructor(
    private _fb: FormBuilder,
    private adminservice: AdminService,
    private _routes: Router,
  ) {
  }

  ngOnInit(): void {
    this.addRatingForm = this._fb.group({
      rating: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.addRatingForm.invalid) {
      this.ckForm = true;
      return
    } else {
      try {
        this.adminservice.addRating(this.addRatingForm.value).subscribe({
          next: (res) => {
            this._routes.navigate(['/admin/rating'])
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

  cancel() {
    this._routes.navigate(['/admin/rating'])

  }
}
