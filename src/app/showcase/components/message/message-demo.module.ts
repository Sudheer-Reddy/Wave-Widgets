import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessageDemoRoutingModule } from './message-demo-routing.module';
import { MessageDemoComponent } from './message-demo.component';
import { MessageModule } from '../../../components/message/message.module';

@NgModule({
  imports: [
    CommonModule,
    MessageDemoRoutingModule,
    MessageModule
  ],
  declarations: [MessageDemoComponent]
})
export class MessageDemoModule { }
