import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IconDemoRoutingModule } from './icon-routing.module';
import { IconModule } from '../../../components/icon/icon.module';
import { IconDemoComponent } from './icon-demo.component';

@NgModule({
  imports: [
    CommonModule,
    IconDemoRoutingModule,
    IconModule,
    FormsModule
  ],
  declarations: [IconDemoComponent]
})
export class IconDemoModule { }
