import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { CompanyRegistrationComponent } from './company-registration/company-registration.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserSigninComponent } from './user-signin/user-signin.component';

@NgModule({
  declarations: [
    AuthComponent,
    CompanyRegistrationComponent,
    UserRegistrationComponent,
    UserSigninComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
