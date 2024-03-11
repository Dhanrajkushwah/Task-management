import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard , } from './auth/guard/admin/login.guard';

const routes: Routes = [
{ path : "",
 redirectTo : 'sign-in',
  pathMatch : 'full'

},
  {
    path: 'super-admin',
    loadChildren: () =>
      import('./component/super-admin/super-admin.module').then(
        (s) => s.SuperAdminModule
      ),
      canActivate : [LoginGuard]
  },
  
  {
    path : 'admin',
    loadChildren : ()=> import('./component/admin/admin.module').then((a)=>a.AdminModule),
    canActivate : [LoginGuard]
  },
  
  {
    path : 'user',
    loadChildren : ()=> import('./component/user/user.module').then((u)=>u.UserModule),
    canActivate : [LoginGuard]
  },

  {
    path : 'sign-in',
    loadChildren : ()=> import('./auth/auth.module').then((c)=>c.AuthModule),
 
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
