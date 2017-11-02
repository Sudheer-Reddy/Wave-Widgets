import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PictureModule } from '../../../components/picture/picture.module';
import { PictureDemoRoutingModule } from './picture-demo-routing.module';
import { PictureDemoComponent } from './picture-demo.component';

@NgModule({
  imports: [
    CommonModule,
    PictureDemoRoutingModule,
    FormsModule,
    PictureModule
  ],
  declarations: [PictureDemoComponent]
})
export class PictureDemoModule { }
