import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor() { }
  
  isLiked(liked:boolean){
      return true;
  }
}
