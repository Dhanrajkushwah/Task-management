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
    this.addTaskForm = this._fb.group({
      title: ['', Validators.required],
      category: ['', Validators.required],
      subCategory: ['', Validators.required],
      taskTime:['', Validators.required],
      price:['', Validators.required],
      description:['', Validators.required],
      descriptionFile:[''],
      companyId:[this.admin_id],
     
    });
   

  }

  Onupload(event: any) {
    if (event.target.files.length > 0) {
      this.document = event.target.files[0];
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
        formData.append('descriptionFile', this.document)
        const arr = ['title', 'category', 'subCategory','taskTime','price','description','companyId']
        for (let key of arr) {
          formData.append(key, this.addTaskForm.get(key)?.value)
        }
        this.adminservice.addTask(formData).subscribe({
          next: (res) => {
      
              this._routes.navigate(['/admin/task'])
     
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
