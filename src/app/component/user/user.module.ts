import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { CommonHeaderComponent } from 'src/app/common-component/common-header/common-header.component';
import { CommonLayoutComponent } from 'src/app/common-component/common-layout/common-layout.component';
import { CommonSidebarOneComponent } from 'src/app/common-component/common-sidebar-one/common-sidebar-one.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { ServicesListComponent } from './components/pages/services-list/services-list.component';
import { UserTaskComponent } from './pages/user-task/user-task.component';
import { AddUserTaskComponent } from './shared/add-user-task/add-user-task.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserPopupComponent } from './components/shared/user-popup/user-popup.component';
import { TotalTaskComponent } from './pages/total-task/total-task.component';
import { UserTaskViewComponent } from './pages/user-task-view/user-task-view.component';

@NgModule({
  declarations: [
    UserComponent,
    ServicesListComponent,
    UserTaskComponent,
    AddUserTaskComponent,
    UserPopupComponent,
    TotalTaskComponent,
    UserTaskViewComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MaterialModule,
    CommonHeaderComponent,
    CommonLayoutComponent,
    CommonSidebarOneComponent,
    ReactiveFormsModule,

  ]
})
export class UserModule { }
