import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { LabelModule } from '../components/label/label.module';
import { AudioModule } from '../components/audio/audio.module';
import { PictureModule } from '../components/picture/picture.module';
import { ButtonModule } from '../components/button/button.module';
import { AnchorModule } from '../components/anchor/anchor.module';
import { IconModule } from '../components/icon/icon.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ButtonModule,
    AnchorModule,
    IconModule,
    FormsModule,
    AudioModule,
    LabelModule,
    PictureModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
