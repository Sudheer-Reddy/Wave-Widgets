import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxDemoRoutingModule } from './checkbox-demo-routing.module';
import { CheckboxDemoComponent } from './checkbox-demo.component';
import { FormsModule } from '@angular/forms';
import { CheckboxModule } from '../../../components/checkbox/checkbox.module';

@NgModule({
  imports: [
    CommonModule,
    CheckboxDemoRoutingModule,
    FormsModule,
    CheckboxModule
  ],
  declarations: [CheckboxDemoComponent]
})
export class CheckboxDemoModule { }
