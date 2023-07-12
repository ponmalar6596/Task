import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './task/home/home.component';
import { GestureComponent } from './task/gesture/gesture.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'gesture', component: GestureComponent },
  {path: '', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
