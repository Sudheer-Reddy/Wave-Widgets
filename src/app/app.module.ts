import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { Label } from './widgets/label/label.component';
import { Audio } from './widgets/audio/audio.component';
import { Picture } from './widgets/picture/picture.component';
import { Anchor } from './widgets/anchor/anchor.component';
import { Button } from './widgets/button/button.component';
import { Icon } from './widgets/icon/icon.component';

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
