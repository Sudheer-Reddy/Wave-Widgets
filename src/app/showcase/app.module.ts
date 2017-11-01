import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { LabelModule } from '../components/label/label.module';
import { AudioModule } from '../components/audio/audio.module';
import { PictureModule } from '../components/picture/picture.module';
import { Anchor } from '../components/anchor/anchor.component';
import { Button } from '../components/button/button.component';
import { Icon } from '../components/icon/icon.component';

@NgModule({
  declarations: [
    AppComponent,
    Button,
    Icon,
    Anchor
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AudioModule,
    LabelModule,
    PictureModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
