import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { SweetalertService } from 'src/app/shared/sweetalert/sweetalert.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { routes } from 'src/app/core/core.index';


@Component({
  selector: 'app-appoinment-list',
  templateUrl: './appoinment-list.component.html',
  styleUrls: ['./appoinment-list.component.scss']
})
export class AppoinmentListComponent {

  public routes = routes;
  constructor(
    private route: Router,

    private _sweetAlert: SweetalertService,


  ) { }



}
