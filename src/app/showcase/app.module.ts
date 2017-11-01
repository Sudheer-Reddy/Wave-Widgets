import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { Label } from '../components/label/label.component';
import { Audio } from '../components/audio/audio.component';
import { Picture } from '../components/picture/picture.component';
import { Anchor } from '../components/anchor/anchor.component';
import { Button } from '../components/button/button.component';
import { Icon } from '../components/icon/icon.component';

@NgModule({
  declarations: [
    AppComponent,
    Label,
    Audio,
    Picture,
    Button,
    Icon,
    Anchor
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
