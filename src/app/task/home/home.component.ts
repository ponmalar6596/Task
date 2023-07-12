import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  isgesture:boolean=false
  ishome:boolean=true
  constructor(private _toast:ToastrService,private router: Router) { }
  images: string[] = [
    'assets/images/img3.jpg',
    'assets/images/img4.jpg',
    'assets/images/img6.jpg',
    'assets/images/img5.jpg',
  ];

  deleteImage(index:number) {
    this.images.splice(index, 1);
    this.showSuccess()
  }
  public showSuccess():void{
    this._toast.success('User Data Successfully Added');
  }

  public showInfo():void{
    this._toast.info('Data Has Successfully Updated')
  }

  public showError():void{
    this._toast.error('Data Has Deleted');
  }
  gesture(){
    this.isgesture=true
    this.ishome=false
  }
}
