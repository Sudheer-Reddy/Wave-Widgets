import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HtmlComponent } from './html.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HtmlComponent],
  exports: [HtmlComponent]
})
export class HtmlModule { }
