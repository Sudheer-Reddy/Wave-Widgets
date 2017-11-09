import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SelectDemoRoutingModule } from './select-demo-routing.module';
import { SelectDemoComponent } from './select-demo.component';
import { SelectModule } from '../../../components/select/select.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    SelectDemoRoutingModule,
    SelectModule,
    FormsModule
  ],
  declarations: [SelectDemoComponent]
})
export class SelectDemoModule { }
