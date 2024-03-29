import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { CompanyRegistrationComponent } from './company-registration/company-registration.component';



import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserSigninComponent } from './user-signin/user-signin.component';
const routes: Routes = [
  { path: '', redirectTo: 'signin', pathMatch: 'full' },
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'signin',
        loadChildren: () =>
          import('./signin/signin.module').then((m) => m.SigninModule),
      },
      {
        path: 'signup',
        loadChildren: () =>
          import('./signup/signup.module').then((m) => m.SignupModule),
      },
      {
        path: 'forgetpassword',
        loadChildren: () =>
          import('./forgetpassword/forgetpassword.module').then(
            (m) => m.ForgetpasswordModule
          ),
      },
      {
        path: 'companyregister',
        component :CompanyRegistrationComponent
      }
      ,
      {
        path: 'usersignin',
        component :UserSigninComponent
      },
      {
        path: 'userregister',
        component :UserRegistrationComponent
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
