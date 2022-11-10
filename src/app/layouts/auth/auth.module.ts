import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { Route, RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

const routes:Route[] = [
  {
    path: '',
    component: AuthComponent,
    children:[
      {
        path: 'login',
        loadChildren: () => import("./login/login.module").then(m => m.LoginModule)
      },
      {
        path: 'signup',
        loadChildren: () => import("./signup/signup.module").then(m => m.SignupModule)
      },
      {
        path: 'personal-info',
        loadChildren: () => import("./personalinfo/personalinfo.module").then(m => m.PersonalinfoModule)
      },
      {
        path: 'verify',
        loadChildren: () => import("./verify/verify.module").then(m => m.VerifyModule)
      }
    ]
  }
]

@NgModule({
  declarations: [
    AuthComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class AuthModule { }
