import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { TaskComponent } from './component/pages/task/task.component';
import { AddTaskComponent } from './component/shared/add-task/add-task.component';
import { AddRatingComponent } from './component/shared/add-rating/add-rating.component';
import { RatingComponent } from './component/pages/rating/rating.component';
import { ProfileComponent } from './component/pages/profile/profile.component';
const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('../../core-component/dashboard/dashboard.module').then((m) => m.DashboardModule),
      },
      {
        path : 'task',
        component : TaskComponent
      },
      {
        path : 'add-task',
        component : AddTaskComponent
      },
      {
        path : 'rating',
        component : RatingComponent
      },
      {
        path : 'add-rating',
        component : AddRatingComponent
      },
      {
        path : 'profile',
        component : ProfileComponent
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
