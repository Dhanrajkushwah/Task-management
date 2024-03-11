import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { ServicesListComponent } from './components/pages/services-list/services-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: '',
    component: UserComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('../../core-component/dashboard/dashboard.module').then((m) => m.DashboardModule),
      },
      {
        path: 'seviceslist',
        component: ServicesListComponent
      }

    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
