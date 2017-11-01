import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AnchorDemoRoutingModule } from './anchor-routing.module';
import { AnchorModule } from '../../../components/anchor/anchor.module';
import { AnchorDemoComponent } from './anchor-demo.component';

@NgModule({
  imports: [
    CommonModule,
    AnchorDemoRoutingModule,
    AnchorModule,
    FormsModule
  ],
  declarations: [AnchorDemoComponent]
})
export class AnchorDemoModule { }
