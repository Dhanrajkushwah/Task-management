import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CompanyService } from '../../../services/company.service';
import { SweetalertService } from 'src/app/shared/sweetalert/sweetalert.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { routes } from 'src/app/core/core.index';
import { ExcelService } from '../../../services/excel/excel.service';

@Component({
  selector: 'app-appoinment-list',
  templateUrl: './appoinment-list.component.html',
  styleUrls: ['./appoinment-list.component.scss']
})
export class AppoinmentListComponent {
  displayedColumns: string[] = ['sno', 'name','department', 'age','doctorName','date' ,'action' ];
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  getAppointmentById :any = [];

 
  appointmentData: any = [];
  public routes = routes;
  constructor(
    private route: Router,
    private service: CompanyService,
    private _sweetAlert: SweetalertService,
    private excelService:ExcelService

  ) { }

  ngOnInit(): void {
    this.getcoupon();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  addcoupon() {
    this.route.navigate(["super-admin/appointmentlist/add"])
  }

  getcoupon() {
    this.service.getAppointment().subscribe(res => {
      this.appointmentData= res
      console.log(this.appointmentData)
      this.dataSource = new MatTableDataSource(this.appointmentData);
      this.dataSource.paginator = this.paginator;
    })
  }
  exportAsXLSX():void {
    this.excelService.exportAsExcelFile(this.appointmentData, 'Appointment-List');
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  deleteAppointment(obj:any){
   
    this._sweetAlert.deleteBtn().then((val)=>{
      if(val.isConfirmed){
       this.service.deleteAppointmentById(obj._id).subscribe({
        next:(res)=>{
          console.log("data deleted", res);
          this.ngOnInit()
        }
       })
      }
    })
  }
  editAppointment(id:any){
    this.route.navigate(
      ['/super-admin/edit-appointment'],
      { queryParams: { id: id } }
    );
  }

}
