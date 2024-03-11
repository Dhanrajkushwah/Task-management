import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin-service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {
  displayedColumns: string[] = ['sno', 'name','department', 'age','doctorName','date' ,'action' ];
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  getAppointmentById :any = [];

 
  appointmentData: any = [];
  constructor(
    private route: Router,
    private adminservice: AdminService,

  ) { }

  ngOnInit(): void {
    this.getcoupon();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  addTask() {
    this.route.navigate(["admin/add-task"])
  }

  getcoupon() {
    this.adminservice.getTask().subscribe(res => {
      this.appointmentData= res
      console.log(this.appointmentData)
      this.dataSource = new MatTableDataSource(this.appointmentData);
      this.dataSource.paginator = this.paginator;
    })
  }
  exportAsXLSX():void {
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
