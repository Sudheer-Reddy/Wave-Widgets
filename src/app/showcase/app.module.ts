import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { Label } from '../components/label/label.component';
import { Audio } from '../components/audio/audio.component';
import { Picture } from '../components/picture/picture.component';

import { ButtonModule } from '../components/button/button.module';
import { AnchorModule } from '../components/anchor/anchor.module';
import { IconModule } from '../components/icon/icon.module';

@NgModule({
  declarations: [
    AppComponent,
    Label,
    Audio,
    Picture
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ButtonModule,
    AnchorModule,
    IconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
