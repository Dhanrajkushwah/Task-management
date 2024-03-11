import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';

import { FeatherModule } from 'angular-feather';
import { sharedModule } from 'src/app/shared/shared.index';
import { FullCalendarModule } from '@fullcalendar/angular';


@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, DashboardRoutingModule, sharedModule,FullCalendarModule],
  exports: [FeatherModule],
})
export class DashboardModule {}
