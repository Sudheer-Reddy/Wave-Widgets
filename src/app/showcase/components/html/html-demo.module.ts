import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HtmlDemoRoutingModule } from './html-demo-routing.module';
import { HtmlDemoComponent } from './html-demo.component';
import { HtmlModule } from '../../../components/html/html.module';

@NgModule({
  imports: [
    CommonModule,
    HtmlDemoRoutingModule,
    HtmlModule
  ],
  declarations: [HtmlDemoComponent]
})
export class HtmlDemoModule { }
