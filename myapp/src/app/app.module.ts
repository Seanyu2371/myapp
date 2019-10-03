import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ImageComponent } from './my-image/image.component';
import { ButtonComponent } from './my-button/button.component';
import { MyServiceService } from './my-service.service';
import { MessagesService } from './messages.service';
import { Message } from './models/message';
import { Messages } from './models/messages';
import { User } from './models/user';

@NgModule({
  declarations: [
    AppComponent,
    ImageComponent,
    ButtonComponent,
    Message,
    Messages,
    User
  ],
  imports: [
    BrowserModule, 
    FormsModule
  ],
  providers: [
    MyServiceService,
    MessagesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
