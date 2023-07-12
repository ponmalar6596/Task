import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskRoutingModule } from './task-routing.module';
import { HomeComponent } from './home/home.component';
import { GestureComponent } from './gesture/gesture.component';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [
    HomeComponent,
    GestureComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    TaskRoutingModule
  ]
})
export class TaskModule { }
