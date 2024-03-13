import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin-service';
import { UserserviceService } from 'src/app/services/userservice.service';

@Component({
  selector: 'app-user-task-view',
  templateUrl: './user-task-view.component.html',
  styleUrls: ['./user-task-view.component.scss']
})
export class UserTaskViewComponent {
  task_id: any
  taskData: any = []
  taskName:any
  taskTime:any
  addTaskForm !: FormGroup;
  ckForm = false;
  taskDescription:any
  taskDescriptionfile:any
  user_id
  document!: File;
  imagesBox = '../../../../../../assets/img/product/product1.jpg'
  constructor(private route: Router,
    private userservice: UserserviceService, private routes: ActivatedRoute,
    private _fb: FormBuilder, private adminservice:AdminService

  ) {
    this.user_id = sessionStorage.getItem("user_id");

  }
  ngOnInit(): void {
    this.routes.queryParams.subscribe(params => {
      this.task_id = params['id'];
    });
    this.userservice.getUserTask(this.task_id).subscribe(res => {
      this.taskData = res
      this.taskName = this.taskData[0].title
      this.taskTime = this.taskData[0].taskTime
      this.taskDescription = this.taskData[0].description
      this.taskDescriptionfile = this.taskData[0].descriptionFile
    })
    this.addTaskForm = this._fb.group({
      title: ['', Validators.required],
      taskTime:['', Validators.required],
      description:['', Validators.required],
      descriptionFile:[''],
      userId:[this.user_id],
    });
  }

  pdf(){
      window.open(this.taskDescriptionfile)
  }

  cancel(){
    this.route.navigate(["/user/totaltask"])   

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
              this.route.navigate(['/user/usertask'])
     
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
}
