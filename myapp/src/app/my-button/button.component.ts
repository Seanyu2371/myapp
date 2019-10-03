import { Component,OnInit } from '@angular/core';
import { MyServiceService } from '../my-service.service';

@Component({
  selector:'app-button',
  templateUrl:'./button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit{
  isliked:boolean;
  
  constructor(private s:MyServiceService){}
  
  ngOnInit(){
    this.isliked=false;
  }
  
  btn_click(){
    this.isliked=this.s.isLiked(this.isliked);
    return this.isliked;
  }
  
  getColor(){
    return 'green';
  }
  
}