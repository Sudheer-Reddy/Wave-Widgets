import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AudioDemoRoutingModule } from './audio-routing.module';
import { AudioModule } from '../../../components/audio/audio.module';
import { AudioDemoComponent } from './audio-demo.component';

@NgModule({
  imports: [
    CommonModule,
    AudioDemoRoutingModule,
    AudioModule,
    FormsModule
  ],
  declarations: [AudioDemoComponent]
})
export class AudioDemoModule { }
