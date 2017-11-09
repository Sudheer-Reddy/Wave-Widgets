import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxDemoRoutingModule } from './checkbox-demo-routing.module';
import { CheckboxDemoComponent } from './checkbox-demo.component';

@NgModule({
  imports: [
    CommonModule,
    CheckboxDemoRoutingModule
  ],
  declarations: [CheckboxDemoComponent]
})
export class CheckboxDemoModule { }
