import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { SuperAdminRoutingModule } from './super-admin-routing.module';
import { SuperAdminComponent } from './super-admin.component';
import { AddCompanyComponent } from './component/shared/add-company/add-company.component';
import { CommonHeaderComponent } from 'src/app/common-component/common-header/common-header.component';
import { CommonLayoutComponent } from 'src/app/common-component/common-layout/common-layout.component';
import { CommonSidebarOneComponent } from 'src/app/common-component/common-sidebar-one/common-sidebar-one.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatTableModule } from '@angular/material/table';
import { AppoinmentComponent } from './component/pages/appoinment/appoinment.component';
import { AppoinmentListComponent } from './component/pages/appoinment-list/appoinment-list.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ChartsComponent } from 'src/app/core-component/charts/charts.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { AngularSignaturePadModule } from '@almothafar/angular-signature-pad';
import { ModalComponent } from './component/shared/modal/modal.component';
// import { ExcelService } from './services/excel/excel.service';

@NgModule({
  declarations: [
    SuperAdminComponent,
    AddCompanyComponent,
    AppoinmentComponent,
    AppoinmentListComponent,
    ChartsComponent,
    ModalComponent,
  ],
  imports: [
    CommonModule,
    SuperAdminRoutingModule,
    MaterialModule,
    CommonHeaderComponent,
    CommonLayoutComponent,
    CommonSidebarOneComponent,
    AngularEditorModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule, MatInputModule, MatButtonModule, MatSnackBarModule ,
    MatTableModule,MatPaginatorModule,MatDatepickerModule,MatNativeDateModule,
    NgApexchartsModule,
    AngularSignaturePadModule


  ],
  // providers: [ExcelService]

})
export class SuperAdminModule { }
