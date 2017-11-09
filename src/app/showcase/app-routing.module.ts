import { Routes,RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            {path: '', component: HomeComponent},
            {path: 'audio', loadChildren: './components/audio/audio-demo.module#AudioDemoModule'},
            {path: 'button', loadChildren: './components/button/button-demo.module#ButtonDemoModule'},
            {path: 'anchor', loadChildren: './components/anchor/anchor-demo.module#AnchorDemoModule'},
            {path: 'icon', loadChildren: './components/icon/icon-demo.module#IconDemoModule'},
            {path: 'label', loadChildren: './components/label/label-demo.module#LabelDemoModule'},
            {path: 'picture', loadChildren: './components/picture/picture-demo.module#PictureDemoModule'},
            {path: 'text', loadChildren: './components/text/text-demo.module#TextDemoModule'},
            {path: 'select', loadChildren: './components/select/select-demo.module#SelectDemoModule'},
            {path: 'checkbox', loadChildren: './components/checkbox/checkbox-demo.module#CheckboxDemoModule'},
            {path: 'video', loadChildren: './components/video/video-demo.module#VideoDemoModule'},
        ])
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}