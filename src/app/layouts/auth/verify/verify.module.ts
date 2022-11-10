import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerifyComponent } from './verify.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { Route, RouterModule } from '@angular/router';

const routes: Route[] = [
  {
    path:'',
    component: VerifyComponent
  }
]

@NgModule({
  declarations: [
    VerifyComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class VerifyModule { }
