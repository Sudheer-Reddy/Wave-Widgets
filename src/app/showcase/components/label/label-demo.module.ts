import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LabelDemoComponent } from './label-demo.component';
import { LabelDemoRoutingModule } from './label-routing.module';
import { LabelModule } from '../../../components/label/label.module';

@NgModule({
  imports: [
    CommonModule,
    LabelDemoRoutingModule,
    LabelModule,
    FormsModule
  ],
  declarations: [LabelDemoComponent]
})
export class LabelDemoModule { }
