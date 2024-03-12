import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin-service';


@Component({
  selector: 'app-total-task',
  templateUrl: './total-task.component.html',
  styleUrls: ['./total-task.component.scss']
})
export class TotalTaskComponent {
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

viewTask(id:any){
  this.route.navigate(
    ['/user/usertaskview'],
    { queryParams: { id: id } }
  );
}

}
