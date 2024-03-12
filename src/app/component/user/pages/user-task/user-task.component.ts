import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin-service';

@Component({
  selector: 'app-user-task',
  templateUrl: './user-task.component.html',
  styleUrls: ['./user-task.component.scss']
})
export class UserTaskComponent {
  displayedColumns: string[] = ['sno', 'name','time', 'category','subcategory','action' ];
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  taskData: any = [];
  constructor(
    private route: Router,
    private adminservice: AdminService,

  ) { }

  ngOnInit(): void {
    this.gettask();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  addTask() {
    this.route.navigate(["/user/addusertask"])
  }

  gettask() {
    this.adminservice.getTask().subscribe(res => {
      this.taskData= res
      this.dataSource = new MatTableDataSource(this.taskData);
      this.dataSource.paginator = this.paginator;
    })
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  deleteAppointment(obj:any){
    // this._sweetAlert.deleteBtn().then((val)=>{
    //   if(val.isConfirmed){
    //    this.service.deleteAppointmentById(obj._id).subscribe({
    //     next:(res)=>{
    //       console.log("data deleted", res);
    //       this.ngOnInit()
    //     }
    //    })
    //   }
    // })
  }
  editAppointment(id:any){
    this.route.navigate(
      ['/super-admin/edit-appointment'],
      { queryParams: { id: id } }
    );
  }

}
