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
            {path: 'icon', loadChildren: './components/icon/icon-demo.module#IconDemoModule'}                                    
        ])
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}