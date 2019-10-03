import { Injectable } from '@angular/core';
import { Message } from './models/message';
import { Messages } from './models/messages';
import { User } from './models/user';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  text:string;
  timestamp:string;
  
  c=new Messages;
  m=new Message("Mon Sep 30 2019 7:45:00","How are you today?");
  m1=new Message("Tue Oct 1 2019 7:45:20","Good, I am fine.");
  m2=new Message("Wen Oct 2 2019 7:45:50","What is your favourite sport?");
  m3=new Message("Thu Oct 3 2019 7:47:00","Basketball.");
  m4=new Message("Fri Oct 4 2019 7:50:00","What is your favourite player?");
  m5=new Message("Sat Oct 5 2019 8:00:00","Andrew Bogut");

  Init(){
     this.c.append(this.m);    
     this.c.append(this.m1);   
     this.c.append(this.m2);
     this.c.append(this.m3);
     this.c.append(this.m4); 
     this.c.append(this.m5);
  }
  
  getMessages(){
     return this.c.container;
  }


  constructor() { }
}
