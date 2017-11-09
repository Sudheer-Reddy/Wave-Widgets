import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideoDemoRoutingModule } from './video-demo-routing.module';
import { VideoDemoComponent } from './video-demo.component';
import { VideoModule } from '../../../components/video/video.module';

@NgModule({
  imports: [
    CommonModule,
    VideoDemoRoutingModule,
    VideoModule
  ],
  declarations: [VideoDemoComponent]
})
export class VideoDemoModule { }
