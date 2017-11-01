import { Routes,RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            {path: '', component: HomeComponent},
            {path: 'audio', loadChildren: './components/audio/audio-demo.module#AudioDemoModule'}
        ])
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}