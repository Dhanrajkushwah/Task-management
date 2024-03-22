import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { ServicesListComponent } from './components/pages/services-list/services-list.component';
import { UserTaskComponent } from './pages/user-task/user-task.component';
import { AddUserTaskComponent } from './shared/add-user-task/add-user-task.component';
import { TotalTaskComponent } from './pages/total-task/total-task.component';
import { UserTaskViewComponent } from './pages/user-task-view/user-task-view.component';

const routes: Routes = [
  {
    path : '',
    component : UserComponent
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('../../core-component/dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path: 'seviceslist',
    component: ServicesListComponent
  }
  ,
  {
    path: 'usertask',
    component: UserTaskComponent
  }
  ,
  {
    path: 'addusertask',
    component: AddUserTaskComponent
  }
  ,
  {
    path: 'totaltask',
    component: TotalTaskComponent
  }
  ,
  {
    path: 'usertaskview',
    component: UserTaskViewComponent
  }
  // { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  // {
  //   path: '',
  //   component: UserComponent,
  //   children: [
      
      
  //   ],
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
