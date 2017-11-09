import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { LabelModule } from '../components/label/label.module';
import { AudioModule } from '../components/audio/audio.module';
import { PictureModule } from '../components/picture/picture.module';
import { ButtonModule } from '../components/button/button.module';
import { AnchorModule } from '../components/anchor/anchor.module';
import { IconModule } from '../components/icon/icon.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { TextModule } from '../components/text/text.module';
import { SelectModule } from '../components/select/select.module';
import { CheckboxModule } from '../components/checkbox/checkbox.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ButtonModule,
    AnchorModule,
    IconModule,
    AudioModule,
    LabelModule,
    PictureModule,
    TextModule,
    SelectModule,
    CheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
