import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { CommonHeaderComponent } from 'src/app/common-component/common-header/common-header.component';
import { CommonLayoutComponent } from 'src/app/common-component/common-layout/common-layout.component';
import { CommonSidebarOneComponent } from 'src/app/common-component/common-sidebar-one/common-sidebar-one.component';
import { MaterialModule } from 'src/app/shared/material/material.module';

@NgModule({
  declarations: [
    UserComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MaterialModule,
    CommonHeaderComponent,
    CommonLayoutComponent,
    CommonSidebarOneComponent,

  ]
})
export class UserModule { }
