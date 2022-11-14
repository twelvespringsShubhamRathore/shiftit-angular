import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageCenterComponent } from './message-center.component';
import { Route, RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Route[] = [
  {
    path: '',
    component: MessageCenterComponent,
  },
];

@NgModule({
  declarations: [MessageCenterComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
})
export class MessageCenterModule {}
