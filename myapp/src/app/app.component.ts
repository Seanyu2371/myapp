import { Component } from '@angular/core';
import { MessagesService } from './messages.service';
import { Message } from './models/message';
import { Messages } from './models/messages';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'mydist';
  mc:Message[]=[];
  
  constructor(private s:MessagesService){
    s.Init();
    this.mc=s.getMessages();
  }
}
