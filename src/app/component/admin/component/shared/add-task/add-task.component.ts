import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin-service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {
  addTaskForm !: FormGroup;
  ckForm = false;
  removeClass = true;
  imgs!: File;
  imagesBox = '../../../../../../assets/img/product/product1.jpg'
  cid: any;
  companybyIdData: any
  constructor(
    private _fb: FormBuilder,
    private adminservice: AdminService,
    private _routes: Router,
  ) { }

  ngOnInit(): void {
    this.addTaskForm = this._fb.group({
      tittle: ['', Validators.required],
      category: ['', Validators.required],
      subcategory: ['', Validators.required],
      taskTime:['', Validators.required],
      price:['', Validators.required],
      description:['', Validators.required],
      descriptionFile:[''],
    });
   

  }

  Onupload(event: any) {
    if (event.target.files.length > 0) {
      this.imgs = event.target.files[0];
      console.log(this.imgs)
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

 

  onSubmit() {
    if (this.addTaskForm.invalid) {
      this.ckForm = true;
      return
    } else {
      try {
        let formData = new FormData();
        formData.append('descriptionFile', this.imgs)
        const arr = ['tittle', 'category', 'subcategory','taskTime','price','description',]
        for (let key of arr) {
          formData.append(key, this.addTaskForm.get(key)?.value)
        }
        this.adminservice.addTask(formData).subscribe({
          next: (res) => {
            if (res) {
              this._routes.navigate(['/admin/task'])
            }
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

}
