import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestureComponent } from './gesture/gesture.component';

const routes: Routes = [
  { path: 'gesture', component: GestureComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskRoutingModule { }
