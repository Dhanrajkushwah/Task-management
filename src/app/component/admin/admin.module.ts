import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';

import { CommonHeaderComponent } from 'src/app/common-component/common-header/common-header.component';
import { CommonLayoutComponent } from 'src/app/common-component/common-layout/common-layout.component';
import { CommonSidebarOneComponent } from 'src/app/common-component/common-sidebar-one/common-sidebar-one.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { TaskComponent } from './component/pages/task/task.component';
import { AddTaskComponent } from './component/shared/add-task/add-task.component';
import { RatingComponent } from './component/pages/rating/rating.component';
import { AddRatingComponent } from './component/shared/add-rating/add-rating.component';
import { ProfileComponent } from './component/pages/profile/profile.component';

@NgModule({
  declarations: [
    AdminComponent,
    TaskComponent,
    AddTaskComponent,
    RatingComponent,
    AddRatingComponent,
    ProfileComponent,


  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    CommonHeaderComponent,
    CommonLayoutComponent,
    CommonSidebarOneComponent,
    MaterialModule,
    ReactiveFormsModule,

  ],


})
export class AdminModule { }
