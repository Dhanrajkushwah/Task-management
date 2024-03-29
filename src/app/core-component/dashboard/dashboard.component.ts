import { Component, OnInit, ViewChild } from '@angular/core';


import { MatCalendar } from '@angular/material/datepicker';
import { Sort } from '@angular/material/sort';
import { FullCalendarComponent } from '@fullcalendar/angular';
import { CalendarOptions, EventInput } from '@fullcalendar/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexXAxis,
  ApexResponsive,
  ApexLegend,
  ApexFill,
} from 'ng-apexcharts';
// import { CompanyService } from 'src/app/component/super-admin/services/company.service';
import { CommonService, SettingsService } from 'src/app/core/core.index';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGrigPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
export type ChartOptions = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  series: ApexAxisChartSeries | any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  chart: ApexChart | any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  responsive: ApexResponsive | any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  colors: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  dataLabels: ApexDataLabels | any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  plotOptions: ApexPlotOptions | any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  yaxis: ApexYAxis | any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  xaxis: ApexXAxis | any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  legend: ApexLegend | any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  fill: ApexFill | any;
};
import { routes } from 'src/app/core/helpers/routes';

import { MatDialog } from '@angular/material/dialog';
import { AdminService } from 'src/app/services/admin-service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  public routes = routes;
  public admin_token: any;
  public super_token: any;
  public user_token: any;
  data: any
  name: any
  constructor(private common: CommonService, private setting: SettingsService,private service:AdminService,
    public dialog: MatDialog) {
    this.super_token = sessionStorage.getItem('superadmin-token')
    this.admin_token = sessionStorage.getItem('admin-token')
    this.user_token = sessionStorage.getItem('user_id')
  }
  ngOnInit(): void {
    if (this.user_token) {
      this.service.getProfile(this.user_token).subscribe({
        next: (res) => {
          this.data = res;
          this.name = this.data.name
        },
        error(err) {
          console.log(err)
        },
      })
    }
  }





}
