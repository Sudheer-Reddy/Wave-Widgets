import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnchorComponent } from './anchor.component';

/**
* The Anchor module
*
* Contains anchor component
*/
@NgModule({
  declarations: [
    AnchorComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [AnchorComponent]
})

export class AnchorModule { }