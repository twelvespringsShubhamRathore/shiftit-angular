import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { Route, RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

const routes:Route[] = [
  {
    path:'',
    component: DashboardComponent,
    children:[
      {
        path:'',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
      },
      {
        path:'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
      },
      {
        path:'messagecenter',
        loadChildren: () => import('./message-center/message-center.module').then(m => m.MessageCenterModule)
      }
    ]
  }
]

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class DashboardModule { }
