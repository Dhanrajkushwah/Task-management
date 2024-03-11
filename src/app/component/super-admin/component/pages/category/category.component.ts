import {AfterViewInit, Component, ViewChild} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { ModalComponent } from '../../shared/modal/modal.component';






const ELEMENT_DATA = [
  {id: 1, url: 'https://t3.ftcdn.net/jpg/04/74/05/94/360_F_474059464_qldYuzxaUWEwNTtYBJ44VN89ARuFktHW.jpg', name: 'Youtube ', },
  {id: 2, url: 'https://1000logos.net/wp-content/uploads/2017/02/Facebook-Logosu.png', name: 'facebook', symbol: 'He'},
  {id: 3, url: 'https://1000logos.net/wp-content/uploads/2017/02/Facebook-Logosu.png', name: 'facebook', symbol: 'Li'},
  {id: 4, url: 'https://1000logos.net/wp-content/uploads/2017/02/Facebook-Logosu.png', name: 'facebook', symbol: 'Be'},
  {id: 5, url: 'https://1000logos.net/wp-content/uploads/2017/02/Facebook-Logosu.png', name: 'facebook', symbol: 'B'},
  // {id: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  // {id: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  // {id: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  // {id: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  // {id: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  // {id: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
  // {id: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
  // {id: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
  // {id: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},
  // {id: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
  // {id: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},
  // {id: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
  // {id: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},
  // {id: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},
  // {id: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},
];
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent  implements AfterViewInit {
  displayedColumns: string[] = ['sno', 'Image','Name' ,'action' ];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  getAppointmentById :any = [];


  appointmentData: any = [];

  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(ModalComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  addTask() {
    // this.route.navigate(["admin/add-task"])
  }

  getcoupon() {
  //   this.adminservice.getTask().subscribe((res: any) => {
  //     this.appointmentData= res
  //     console.log(this.appointmentData)
  //     this.dataSource = new MatTableDataSource(this.appointmentData);
  //     this.dataSource.paginator = this.paginator;
  //   })
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
    // this.route.navigate(
    //   ['/super-admin/edit-appointment'],
    //   { queryParams: { id: id } }
    // );
  }
}
