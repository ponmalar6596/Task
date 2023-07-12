import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './task/home/home.component';
import { GestureComponent } from './task/gesture/gesture.component';
import { ProfileComponent } from './task/profile/profile.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GestureComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      closeButton:true,
      timeOut:5000,
      progressBar:true
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
