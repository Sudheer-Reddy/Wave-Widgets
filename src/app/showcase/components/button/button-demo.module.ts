import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ButtonDemoRoutingModule } from './button-routing.module';
import { ButtonModule } from '../../../components/button/button.module';
import { ButtonDemoComponent } from './button-demo.component';

@NgModule({
  imports: [
    CommonModule,
    ButtonDemoRoutingModule,
    ButtonModule,
    FormsModule
  ],
  declarations: [ButtonDemoComponent]
})
export class ButtonDemoModule { }
