import { Component } from '@angular/core';

@Component({
  selector:'app-message',
  templateUrl:'./message.html'
})

export class Message{
  timestamp:string;
  text:string;
  constructor(timestamp:string, text:string){
     this.timestamp=timestamp;
     this.text=text;
  }
}