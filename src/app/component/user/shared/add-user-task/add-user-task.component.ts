import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin-service';

@Component({
  selector: 'app-add-user-task',
  templateUrl: './add-user-task.component.html',
  styleUrls: ['./add-user-task.component.scss']
})
export class AddUserTaskComponent implements OnInit {
  addTaskForm !: FormGroup;
  ckForm = false;
  removeClass = true;
  document!: File;
  imagesBox = '../../../../../../assets/img/product/product1.jpg'
  user_id
  companybyIdData: any
  constructor(
    private _fb: FormBuilder,
    private adminservice: AdminService,
    private _routes: Router,
  ) { 
    this.user_id = sessionStorage.getItem("user_id");

  }

  ngOnInit(): void {
    this.addTaskForm = this._fb.group({
      title: ['', Validators.required],
      taskTime:['', Validators.required],
      description:['', Validators.required],
      descriptionFile:[''],
      userId:[this.user_id],
     
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
        const arr = ['title','taskTime','description','userId']
        for (let key of arr) {
          formData.append(key, this.addTaskForm.get(key)?.value)
        }
        this.adminservice.addTask(formData).subscribe({
          next: (res) => {
              this._routes.navigate(['/user/usertask'])
     
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
    this._routes.navigate(['/user/usertask'])

  }
}
