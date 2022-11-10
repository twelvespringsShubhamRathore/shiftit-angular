import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalinfoComponent } from './personalinfo.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { Route, RouterModule } from '@angular/router';

const routes:Route[] = [
  {
    path:'',
    component: PersonalinfoComponent
  }
]

@NgModule({
  declarations: [
    PersonalinfoComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class PersonalinfoModule { }
