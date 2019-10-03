import { Message } from './message'
import { Component } from '@angular/core';

@Component({
  selector:'app-messages',
  templateUrl:'./messages.html'
})

export class Messages{
  container:Message[]=[];
  constructor(){}
  
  append(m:Message){
    this.container.push(m);
  }
  
}