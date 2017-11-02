import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { PictureComponent } from './picture.component';

@NgModule({
  imports: [
    CommonModule,
    CoreModule
  ],
  exports: [
    PictureComponent
  ],
  declarations: [
    PictureComponent
  ]
})
export class PictureModule { }
