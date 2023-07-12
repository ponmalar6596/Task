import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router'
@Component({
  selector: 'app-gesture',
  templateUrl: './gesture.component.html',
  styleUrls: ['./gesture.component.scss']
})
export class GestureComponent {
  isgesture:boolean=false
  ishome:boolean=true
  isprofile:boolean=false
  constructor(private _toast:ToastrService,private router: Router) { }
  images: string[] = [
    'assets/images/img11.jpg',
    'assets/images/img12.jpg',
    'assets/images/img13.jpg',
    'assets/images/img14.jpg',
  ];
  deleteImage(index: number): void {
    this.images.splice(index, 1);
  }
  home(){
    this.isgesture=true
    this.ishome=false
    this.isprofile=false
  }
  profile(){
    this.isprofile=true
    this.isgesture=false
    this.ishome=false
  }
}
