import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Base } from './base.class';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    Base
  ],
  declarations: [Base]
})
export class CoreModule { }
