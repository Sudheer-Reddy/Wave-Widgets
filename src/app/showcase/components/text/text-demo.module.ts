import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TextDemoRoutingModule } from './text-demo-routing.module';
import { TextDemoComponent } from './text-demo.component';
import { TextModule } from '../../../components/text/text.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    TextDemoRoutingModule,
    TextModule,
    FormsModule
  ],
  declarations: [TextDemoComponent]
})
export class TextDemoModule { }
