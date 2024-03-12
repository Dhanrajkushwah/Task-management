import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin-service';
@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent {
displayedColumns: string[] = ['sno', 'rating','action' ];
dataSource = new MatTableDataSource();
@ViewChild(MatPaginator)
paginator!: MatPaginator;
ratingData: any = [];
constructor(
  private route: Router,
  private adminservice: AdminService,

) { }

ngOnInit(): void {
  this.getrating();
}

ngAfterViewInit() {
  this.dataSource.paginator = this.paginator;
}
addRating() {
  this.route.navigate(["admin/add-rating"])
}

getrating() {
  this.adminservice.getRating().subscribe(res => {
    this.ratingData= res
    this.dataSource = new MatTableDataSource(this.ratingData);
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
editRating(id:any){
  this.route.navigate(
    ['/admin/add-rating'],
    { queryParams: { id: id } }
  );
}

}
